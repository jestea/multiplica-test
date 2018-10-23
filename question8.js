'use strict'

let people = [
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Yino',
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

function myFunc (arr) {
  const response = [];
  const persons = arr.filter(el => 
    el.donacion && el.esposas.length >= 1 && (el.name[0] === 'Y' || el.name[0] === 'N')
  );
  persons.forEach(person => { response.push(person.name) });
  return response;
}

console.log(myFunc(people));
