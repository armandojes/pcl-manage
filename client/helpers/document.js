import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

class Document {
  constructor(){
    this.book = new ExcelJS.Workbook();
  }

  filter_bajas(row){
    row.eachCell((cell) => {
      cell.style = {
        fill: {
          type: 'pattern',
          pattern:'solid',
          fgColor:{argb:'FFFF0000'}
        }
      }
    })
  }

  create_sheet(sheet_name, data){
    const sheet = this.book.addWorksheet(sheet_name, {properties:{tabColor:{argb:'FFC0000'}}});
    sheet.columns = [
      { header: 'Id', key: 'id', width: 5},
      { header: 'Nombre', key: 'name', width: 30 },
      { header: 'Mensualidad', key: 'cost', width: 14 },
      { header: 'Numero', key: 'number', width: 15 },
      { header: 'Direccion', key: 'adress', width: 50 },
      { header: 'Ultimo pago', key: 'latest_pay', width: 20 },
      { header: 'Estado', key: 'status', width: 10 },
      { header: 'Observaciones', key: 'meta', width: 20 },
    ];

    data.map((client_unique, index) => {
      const row = sheet.addRow({
        ...client_unique,
        id: index + 1,
        meta: 'null',
      })
      if (client_unique.status === 'baja') this.filter_bajas(row);
    })
  }

  download(file_name){
    this.book.xlsx.writeBuffer().then(function (data) {
      var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      saveAs(blob, `${file_name}.xlsx`);
    });
  }

}


export default new Document();
