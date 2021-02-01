const fs = require('fs');

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
  console.log('Note saved!');
}

const getNotes = () => {
  return 'Your notes...';
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const hasDuplicateNote = !notes.some((n) => n.title === title);
  if (hasDuplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
  } else {
    console.log(`Note "${title}" already exists`);
  }
}

module.exports = {
  getNotes,
  addNote
};