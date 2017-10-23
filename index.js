const electronStarter = require('./electron-starter'),
      checkForData = require('./check-for-data'),
      app = electronStarter.app
      startRemindersWait = require('./start-reminders-wait');

electronStarter.start();
checkForData.check();
startRemindersWait(app);
