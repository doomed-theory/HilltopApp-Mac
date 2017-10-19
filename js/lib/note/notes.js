const fs = require('fs'),
      Note = require('./note');

class Notes {
  constructor(path, notes = []) {
    this.notes = notes;
    this.path = path;
  }

  json() {
    return this.notes.map(note => note.json());
  }

  save(path = this.path) {
    fs.writeFileSync(this.path, JSON.stringify(this.json()));
  }

  clear(save = false, path = this.path) {
    this.notes = [];
    if (save) {
      this.save(path);
    }
  }

  getSaved(path = this.path) {
    let notes = [];
    try {
      notes = JSON.parse(fs.readFileSync(path)).map(note => new Note({title: note.title, content: note.content}));
    } catch(err) {
      console.error(`Failed to parse notes!\n${err.stack}`);
    }

    return notes;
  }

  load(path = this.path) {
    this.notes = this.getSaved(path);
  }
}

module.exports = Notes;
