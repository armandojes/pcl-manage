import mysql, { format } from 'mysql';
import config from '../config';

const connect = () => {
  const conexion = mysql.createConnection(config.database);
  conexion.connect((error) => { error && (console.log('[error]' + error))});
  return conexion;
}

const query = (sql) => new Promise((resolve, reject) => {
  const con = connect();
  con.query(sql, (error = false, data = {}, fields = {}) => {
    resolve({error: error || false, data, fields});
    con.end();
  });
});

function database (table_name){
  this.TABLE_NAME = table_name || '';
  this.WHERE = '';
  this.ORDER_BY = '';
  this.SQL = '';
  this.LIMIT = '';
}

database.prototype.where = function (identifier, value) {
  this.WHERE === ''
  ? this.WHERE = this.WHERE + format('WHERE ?? = ?', [identifier, value])
  : this.WHERE = this.WHERE +' '+ format('AND ?? = ?', [identifier, value])
}

database.prototype.limit = function (limit, initial = 0){
  this.LIMIT = initial === 0
  ? `LIMIT ${limit}`
  : `LIMIT ${initial} , ${limit}`;
}

database.prototype.order_by = function (identifier, value){
  this.ORDER_BY = format(`ORDER BY ?? ${value}`, identifier);
}

database.prototype.create = async function (data_to_insert){
  this.SQL = format("INSERT INTO ?? SET ?", [this.TABLE_NAME, data_to_insert]);
  const result = await query(this.SQL);
  return {error: result.error, id: result.data.insertId || null}
}

database.prototype.update = async function (data_to_update){
  this.SQL = format(`UPDATE ?? SET ? ${this.WHERE}`, [this.TABLE_NAME, data_to_update]);
  const result = await query(this.SQL);
  return {
    error: result.error,
    state: result.data.affectedRows ? true : false
  };
}

database.prototype.fetch_sigle = async function (array_of_fileds = '*') {
  this.SQL = format(`SELECT ?? FROM ?? ${this.WHERE} ${this.ORDER_BY} LIMIT 1`, [array_of_fileds, this.TABLE_NAME]);
  const result = await query(this.SQL);
  return {error: result.error, data: result.data[0] || {}};
}

database.prototype.fetch_list = async function (array_of_fileds = '*'){
  this.SQL = format(`SELECT ?? FROM ?? ${this.WHERE} ${this.ORDER_BY} ${this.LIMIT}`, [array_of_fileds, this.TABLE_NAME]).trim();
  const result = await query(this.SQL);
  return {error: result.error, data: result.data};
}

database.prototype.delete = async function (){
  this.SQL = format(`DELETE FROM ?? ${this.WHERE} ${this.LIMIT} `,[this.TABLE_NAME]);
  const result = await query(this.SQL);
  return {
    error: result.error,
    state: result.data.affectedRows ? true : false
  };
}

export default database;
