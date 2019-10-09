import store from '../store';
async function Collect  (request, response) {
  console.log(request.body.session);
  response.success({payload: 'OK'});
}

export default Collect;
