'use strict'

let obj = {
  nombre: 'alex',
  edad: 15
}

function copyObj (obj) {
  let response = [];
  for (let i = 0; i < 3; i++) {
    let copyObj = Object.assign({}, obj);
    copyObj.edad = copyObj.edad + (i+1);
    response.push(copyObj);
  }
  return response;
}
/**
 * 
 * Print three copy objects
 */
console.log(copyObj(obj));
