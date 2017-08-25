import 'whatwg-fetch';
export function getUsers(){
  return get('users');
}

// export function deleteUser(id){
//   return del(`users/${id}`);
// }

function get(Url){
  return fetch(Url).then(onSucess, onError);
}

function onSucess(response){
  return response.json();
}

function onError(error){
  console.log(error); // eslint-disable-line no-console
}
