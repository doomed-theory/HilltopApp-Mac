const {ipcMain} = require('electron'),
      {Reminders, Reminder} = require('./js/lib/reminder'),
      {app} = require('electron');

module.exports = (app) => {
  app.on('ready', () => {
    let path = `${app.getPath('appData')}/HillTopApp/reminders.json`,
        reminders = new Reminders(path);

    reminders.load();

    reminders.startWait();

    ipcMain.on('start-reminder-wait', (event, reminderJSON) => {
      let reminder = new Reminder(reminderJSON);
      reminder.startWait();
    });
  });

}
