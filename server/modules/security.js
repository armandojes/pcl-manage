import { verify as verify_jsonwebtoken, sign as sign_jsonwebtoken } from 'jsonwebtoken';
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
  const access_token = sign_jsonwebtoken(data, jsonwebtoken.key);
  return access_token;
}

export default {
  verify,
  sign,
}
