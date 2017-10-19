const {Note, Notes} = require('../lib/note');

let path = `${__dirname}/../../data/notes.json`,
    notes = new Notes(path);

notes.load();

module.exports = notes;
