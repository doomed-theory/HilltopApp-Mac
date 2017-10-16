class Note {
  constructor({title = "New Note", content = ""}) {
    this.title = title;
    this.content = content;
    this.json = {
      title: this.title,
      content: this.content
    };
  }
}
