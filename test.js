
debugger;

let logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let login =  'Ajax';

isLoginUnique (logins, login); 

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
  let result = allLogins.includes(login);
  return result;
}
