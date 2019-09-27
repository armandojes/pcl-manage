import { verify as verify_jsonwebtoken } from 'jsonwebtoken';
import { jsonwebtoken } from '../config.js';


export function verify (access_token){
  return new Promise((resolve, reject) => {
    if (access_token === null || access_token === ''){
      resolve(false);
    } else {
      verify_jsonwebtoken(access_token,jsonwebtoken.key, (error, data) => {
        if (error){resolve(false)}
        else {resolve(data)}
      });
    }
  });
}

export function sign (data){
  return '';
}

export default {
  verify,
  sign,
}
