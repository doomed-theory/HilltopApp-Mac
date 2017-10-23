const {Reminder, Reminders} = require('../lib/reminder'),
      {app} = require('electron').remote.require('electron');

let path = `${app.getPath('appData')}/HillTopApp/reminders.json`,
    reminders = new Reminders(path);

reminders.load();

module.exports = reminders;
