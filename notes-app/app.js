const chalk = require('chalk');
const getNotes = require('./notes');

console.log(getNotes());
console.log(chalk.green.inverse.bold.italic('Success!'));

console.log(process.argv[2])
