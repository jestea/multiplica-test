'use strict'

function getDrink(id) {
  let drinks = [
    'limonada',
    'fanta',
    'cerveza',
    'kerosene', 
    'gasolina',
    'chicharra',
    'pisco',
    'punto g',
    'ron',
    'leche',
    'quaker',
    'guarana',
    'agua de jamaica'
  ];
  const DEFAULT_ITEM = drinks.length - 1;
  let selectedItem =  drinks[id - 1] || drinks[DEFAULT_ITEM];
  console.log(`Estoy tomando ${selectedItem}`);
}
/**
 * 
 * Testing getDrink function
 */
getDrink(12);
getDrink(121212);
getDrink();
