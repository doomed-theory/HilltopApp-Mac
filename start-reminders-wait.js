const {ipcMain} = require('electron');

module.exports = (app) => {
  app.on('ready', () => {
    const Reminder = require('./js/lib/reminder').Reminder;

    let reminders = require('./js/data/reminders');

    reminders.startWait();

    ipcMain.on('start-reminder-wait', (event, reminderJSON) => {
      let reminder = new Reminder(reminderJSON);
      reminder.startWait();
    });
  });

}
