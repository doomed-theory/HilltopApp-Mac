const {Note} = require('../lib/note');

let notesJSON = [];

try {
  notesJSON = JSON.parse(fs.readFileSync('./data/notes.json'));
} catch (err) {
  console.log(`Error parsing notes!\n${err.stack}`);
}

let notes = notesJSON.map(note => new Note(note));

module.exports = notes;
