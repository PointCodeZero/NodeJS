const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch(e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const getNotes = () => {
  return 'Your notes...';
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const hasDuplicateNote = notes.some((n) => n.title === title);
  if (!hasDuplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log('Note added!');
  } else {
    console.log(`Note "${title}" already exists`);
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const hasNote = notes.some((n) => n.title === title);
  if (hasNote) {
    const newNotes = notes.filter((n) => n.title !== title);
    saveNotes(newNotes);
    console.log(chalk.green.inverse('Note removed!'));
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse('Your notes:'));
  notes.forEach((n) => console.log(`${n.title}`));
}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((n) => n.title === title);
  if (note) {
    console.log(`${chalk.blue(title)}: ${note.body}`);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};