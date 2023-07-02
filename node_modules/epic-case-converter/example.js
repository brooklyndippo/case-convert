const convertCase = require('./index.js');


// CONVERSION TESTS:

// test converting to camel case
console.log('Camel Case:\n', convertCase('MY_VARIABLE_NAME', 'camel'), '\n');

// test converting to pascal case
console.log('Pascal Case:\n', convertCase('my-variable-name', 'pascal'), '\n');

// test converting to snake case
console.log('Snake Case:\n', convertCase('myVariableName', 'snake'), '\n');

// test converting to kebab case
console.log('Kebab Case:\n', convertCase('MyVariableName', 'kebab'), '\n');

// test converting to train case
console.log('Train Case:\n', convertCase('my_variable_name', 'train'), '\n');

// test converting to screaming snake case
console.log('Screaming Snake Case:\n', convertCase('My-Variable-Name', 'screaming-snake'), '\n');

// test converting to upper case
console.log('Upper Case:\n', convertCase('My-Variable-Name', 'upper'), '\n');

// test converting to lower case
console.log('Lower Case:\n', convertCase('My-Variable-Name', 'lower'), '\n');
