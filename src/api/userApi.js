import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}

function get(Url){
  return fetch(baseUrl + Url).then(onSucess, onError);
}

// Can't call func delete since reserved word.
function del(Url){
  const request = new Request(baseUrl + Url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSucess, onError);
}

function onSucess(response){
  return response.json();
}

function onError(error){
  console.log(error); // eslint-disable-line no-console
}
