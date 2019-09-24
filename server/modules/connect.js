import mysql from 'mysql';
import config from '../config';


const connect = () => {
  const conexion = mysql.createConnection(config.database);
  conexion.connect((error) => { console.log(error) });
  return conexion;
}


const query = (sql, replace) => new Promise((resolve, reject) => {
  const con = connect();
  if (replace) {
    console.log(replace);
    con.query(sql, replace, (error, result, fields) => {
      resolve({error, data: result, fields});
      con.end();
    });
  } else {
    con.query(sql, (error, result, fields) => {
      resolve({error, data: result, fields});
      con.end();
    });
  }
});


export default {
  query,
  escape: mysql.escape
};
