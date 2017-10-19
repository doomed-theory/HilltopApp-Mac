const {Reminder, Reminders} = require('../lib/reminder');

let path = `${__dirname}/../../data/reminders.json`,
    reminders = new Reminders(path);

reminders.load();

module.exports = reminders;
