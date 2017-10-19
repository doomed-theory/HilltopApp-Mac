const fs = require('fs'),
      Reminder = require('./reminder');

class Reminders {
  constructor(path, reminders = []) {
    this.reminders = reminders;
    this.path = path;
  }

  json() {
    return this.reminders.map(reminder => reminder.json());
  }

  startWait() {
    this.reminders.forEach((reminder, i) => {
      reminder.startWait();
    });
  }

  cancel() {
    this.reminders.forEach((reminder, i) => {
      reminder.cancel();
    });
  }

  remove(index, amount = 1) {
    this.reminders.splice(index, amount);
  }

  save(path = this.path) {
    fs.writeFileSync(this.path, JSON.stringify(this.json()));
  }

  clear(save = false, path = this.path) {
    this.reminders.forEach(reminder => {
      clearTimeout(reminder.timeout);
    });
    this.reminders = [];
    if (save) {
      this.save(path);
    }
  }

  getSaved(path = this.path) {
    let reminders = [];
    try {
      reminders = JSON.parse(fs.readFileSync(path))
      .map(reminder => new Reminder({title: reminder.title, date: reminder.date, hour: reminder.hour, minute: reminder.minute, period: reminder.period}))
      .filter(reminder => reminder.dateTimeMillis >= Date.now());
    } catch(err) {
      console.error(`Failed to parse reminders!\n${err.stack}`);
    }

    return reminders;
  }

  load(path = this.path) {
    this.reminders = this.getSaved(path);
  }
}

module.exports = Reminders;
