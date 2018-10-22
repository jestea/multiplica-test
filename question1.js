'use strict'

function callme (parameter1, parameter2) {
  if ((typeof parameter1 === 'undefined') && (typeof parameter2 === 'undefined')) console.error(new Error('It\'s an error '));
}
/**
 * Testing the callme function
 */
callme([], {});
callme('', '');
callme();