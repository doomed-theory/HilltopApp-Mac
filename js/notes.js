const fs = require('fs');

let notes = getNotes();


loadNotes(notes);

$('#add-note-button').click(() => {
  $('#notes').append(getNoteHTML("New Note", ""))
  .find('.note')
  .last()
  .find('.save-note-button')
  .click(function() {
    saveNoteButtonAction($(this), notes);
  })
  .parent()
  .find('.delete-note-button')
  .click(function() {
    deleteNoteButtonAction($(this), notes);
  });
  notes.push({
    title:"New Note",
    content: ""
  });
  saveNotes(notes);
});

function getNoteHTML(title, content) {
  return `<li class="note">
    <form>
      <input type="text" value="${title}">
    </form>
    <textarea rows="20" cols="50">${content}</textarea>
    <br>
    <button class="save-note-button">Save</button>
    <button class="delete-note-button">Delete</button>`;
}

function saveNotes(notes, path = "./data/notes.json") {
  fs.writeFileSync(path, JSON.stringify(notes));
}

function loadNotes(notes) {
  let notesHTML = "";
  notes.forEach(note => {
    notesHTML += getNoteHTML(note.title, note.content);
  });
  $('#notes')
  .html(notesHTML)
  .find('.save-note-button')
  .click(function() {
    saveNoteButtonAction($(this), notes);
  })
  .parent()
  .find('.delete-note-button')
  .click(function() {
    deleteNoteButtonAction($(this), notes);
  });
}

function saveNoteButtonAction($saveNoteButton, notes) {
  let $updatedNote = $saveNoteButton.parent(),
      noteIndex = $updatedNote.index();

  notes[noteIndex] = {
    title: $updatedNote.find('input').val(),
    content: $updatedNote.find('textarea').val()
  };
  saveNotes(notes);
  updateNotesList();
}

function deleteNoteButtonAction($deleteNoteButton, notes) {
  let $noteToDelete = $deleteNoteButton.parent(),
      noteIndex = $noteToDelete.index();

  console.log(noteIndex, notes + "");

  notes.splice(noteIndex, 1);
  console.log(notes + '');
  $noteToDelete.remove();

  saveNotes(notes);
  updateNotesList();
}

function getNotes(path = './data/notes.json') {
  let notes = [];

  try {
    notes = JSON.parse(fs.readFileSync(path));
  } catch (err) {
    console.log(`Error parsing notes!\n${err.stack}`);
  }

  return notes;
}

function updateNotesList() {
  notes = getNotes();
}
