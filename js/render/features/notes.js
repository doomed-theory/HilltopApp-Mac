(function() {
  const fs = require('fs'),
        {Note} = require(`${__dirname}/../js/lib/note`);

  let notes = require(`${__dirname}/../js/data/notes`);


  renderNotes(notes);

  $('#add-note-button').click(() => {
    let note = new Note("New Note", "");
    $('#notes').append(getNoteHTML(note))
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
    notes.notes.push(note);
    notes.save();
  });

  function getNoteHTML(note) {
    return `<li class="note">
      <form>
        <input type="text" value="${note.title}">
      </form>
      <textarea rows="20" cols="50">${note.content}</textarea>
      <br>
      <button class="save-note-button">Save</button>
      <button class="delete-note-button">Delete</button>`;
  }

  // function saveNotes(notes, path = "./data/notes.json") {
  //   fs.writeFileSync(path, JSON.stringify(notes.notes.map(note => note.json)));
  // }

  function renderNotes(notes) {
    let notesHTML = "";
    notes.notes.forEach(note => {
      notesHTML += getNoteHTML(note);
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

    notes.notes[noteIndex].title = $updatedNote.find('input').val()
    notes.notes[noteIndex].content = $updatedNote.find('textarea').val();
    notes.save();
    updateNotesList(notes);
  }

  function deleteNoteButtonAction($deleteNoteButton, notes) {
    let $noteToDelete = $deleteNoteButton.parent(),
        noteIndex = $noteToDelete.index();

    notes.notes.splice(noteIndex, 1);
    $noteToDelete.remove();

    notes.save();
    updateNotesList(notes);
  }

  function updateNotesList(updatedNotes) {
    notes = updatedNotes;
  }
})();
