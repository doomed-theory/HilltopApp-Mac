const {Note, Notes} = require('../lib/note'),
      {app} = require('electron').remote.require('electron');

let path = `${app.getPath('appData')}/HillTopApp/notes.json`,
    notes = new Notes(path);

notes.load();

module.exports = notes;
