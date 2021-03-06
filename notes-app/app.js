const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes');

//Customize Yargs version
yargs.version('1.1.0');

// Add command
yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    title: {
      describe: 'Note title',
      type: 'string',
      demandOption: true
    },
    body: {
      describe: 'Note body',
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => addNote(argv.title, argv.body)
});

// Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Remove Note By Title',
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => removeNote(argv.title)
});

// List command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: listNotes
});


// Read command
yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Read Note By Title',
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => readNote(argv.title)
});

yargs.parse();
