import store from '../components/clients/store';
import clients from '../clients';

async function Test (reques, response){

  // for (let index=0;index<clients.length;index++){
  //   const client = {
  //     ...clients[index],
  //     meta: JSON.stringify({place: 'Erasto Urbina', date: 'miércoles 23 octubre 2019'}),
  //   };
  //
  //   const id_created = await store.save(client);
  //   console.log(id_created);
  // }
  response.success();
}

export default Test;
