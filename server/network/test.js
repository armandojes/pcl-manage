import mysql, { format } from 'mysql';
import config from '../config';


async function Test (reques, response){

  const conexion = mysql.createConnection(config.database);
  conexion.connect((error) => {
    console.log(error)
    if (error){
      response.send(error)
    } else {
      response.send('OK');
    }
  });
  //response.success();
}

export default Test;
