const fs = require('fs'),
      Reminder = require('../lib/reminder').Reminder,
      Reminders = require('../lib/reminder').Reminders;

let remindersJSON = [];

try {
  remindersJSON = JSON.parse(fs.readFileSync('./data/reminders.json'));
} catch (err) {
  console.log(`Error parsing reminders!\n${err.stack}`);
}

let reminders = new Reminders(remindersJSON.map(reminder => {
  return new Reminder({
    title: reminder.title,
    date: reminder.date,
    hour: reminder.hour,
    minute: reminder.minute,
    period: reminder.period
  });
}).filter(reminder => {
  return reminder.dateTimeMillis >= Date.now();
}));

module.exports = {
  enableAll: function() {
    reminders.reminders.forEach(reminder => {
      reminder.startWait();
    });
  }
}

module.exports.reminders = reminders;
