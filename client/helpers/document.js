import moment from '../../helpers/moment';
import xlsx from 'xlsx';

class Document {

  constructor(){
    this.rows = [{width: 5}, {width: 35}, {width: 8}, {width: 15}, {width: 40}, {width: 20}, {width: 12}, {width: 20}];
    this.period = moment.get_period();
  }



}

export default new Document();
