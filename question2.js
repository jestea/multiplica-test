'use strict'

function myPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('La prome se demoró'));
    }, 3000);
  });
}
/**
 * 
 * testing the promise
 */

 myPromise()
  .then(result => {
    console.log(result);
  }, error => {
    console.log(error)
  });