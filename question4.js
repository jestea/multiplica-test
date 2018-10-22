'use strict'

var arrPersonas = [
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira']
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: []
  }
];

function changeName (id) {
  let objCopy = {};
  if (arrPersonas[id]) {
    objCopy = Object.assign({}, arrPersonas[id]);
    objCopy.name = 'choy';
  }
  return objCopy;
}
/**
 * 
 * Testing changeName function
 */
console.log(changeName(1));
console.log(changeName(30));
console.log(arrPersonas);