//=========== Код для VS CODE ===========
// debugger;

// let logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// let login =  'Ajax';
//  addLogin(logins, login); 


// function isLoginValid (login) {
//   // Write code under this line
//  return login.length >= 4 && login.length <= 16;
// }


// function isLoginUnique  (allLogins, login) {
//   'use strict';
//   // Write code under this line
//   if (allLogins.includes(login)) {
//     return false;
//   } 
//   return true;
// }

// function addLogin (allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line   
//   if(isLoginValid(login) === false) {
//     return message = ERROR;
//   }

//   if (isLoginUnique(allLogins, login) === false ){
//     return message = REFUSAL;
//   } 

//     allLogins = allLogins.push(login);

//     return  message = SUCCESS;
// }


//========== Код для бота =================

function isLoginValid (login, min = 4, max = 16) {
  // Write code under this line
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
   if (allLogins.includes(login)) {
    return false;
  } 
  return true;
   
}

function addLogin (allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line    
   if(isLoginValid(login) === false) {
    return message = ERROR;
  }

  if (isLoginUnique(allLogins, login) === false ){
   return message = REFUSAL;
  } 

    allLogins = allLogins.push(login);

    return  message = SUCCESS;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'

 //console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

//console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' 