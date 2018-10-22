'use strict'

const people = [
  {
    name: 'Pepe',
    edad: 11
  },
  {
    name: 'Juan',
    edad: 22
  },
  {
    name: 'Lalo',
    edad: 33
  }
];

function excludePeople (arr, ...ages) {
  const response = [];
  arr.forEach(person => {
    if (!ages.includes(person.edad)) response.push(person.name);
  });
  return response;
}

console.log(excludePeople(people, 11));

