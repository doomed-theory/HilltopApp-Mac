class Reminders {
  constructor(reminders) {
    this.reminders = reminders;
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
}

module.exports = Reminders;
