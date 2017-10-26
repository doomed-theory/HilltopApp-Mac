const fs = require('fs'),
      {app} = require('electron');

let dataPath = `${app.getPath('appData')}/HillTopApp`,
    files = {
      settings: `${dataPath}/settings.json`,
      notes: `${dataPath}/notes.json`,
      reminders: `${dataPath}/reminders.json`,
      schedule: `${dataPath}/schedule.json`
    };

function checkFile(file, defaultData) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(defaultData));
  }
}

module.exports = {
  check: () => {
    if (!fs.existsSync(dataPath)) {
      fs.mkdirSync(dataPath);
    }

    checkFile(files.settings, {userType: "student"});
    checkFile(files.notes, []);
    checkFile(files.reminders, []);
    checkFile(files.schedule, [
      'Before School',
      'First Period',
      'Second Period',
      'Third Period',
      'Fourth Period',
      'Fifth Period',
      'Sixth Period',
      'Seventh Period',
      'Eighth Period',
      'After School',
    ]);
  }
}
