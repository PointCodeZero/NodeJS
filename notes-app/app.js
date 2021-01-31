const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

//Customize Yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    title: {
      describe: 'Note title',
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => console.log('Adding a new note!', argv)
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log('Removing a note!')
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => console.log('Listing all notes!')
});


// Create read command
yargs.command({
  command: 'read',
  describe: 'Read note',
  handler: () => console.log('Reading a note!')
});

yargs.parse();
