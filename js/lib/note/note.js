class Note {
  constructor({title = "New Note", content = ""}) {
    this.title = title;
    this.content = content;
  }

  json() {
    return {
      title: this.title,
      content: this.content
    };
  }
}

module.exports = Note;
