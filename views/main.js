// Import the pug module
const pug = require('pug');

// Compile the template (with the data not yet inserted)
const templateCompiler = pug.compileFile('first.pug');

// Insert your data into the template file
console.log(templateCompiler({ name: 'james' }))