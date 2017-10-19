const electronStarter = require('./electron-starter.js'),
      app = electronStarter.app
      startRemindersWait = require('./start-reminders-wait');

electronStarter.start();
startRemindersWait(app);
