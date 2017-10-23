const fs = require('fs'),
      {app} = require('electron').remote.require('electron'),
      {Settings} = require('../lib').settings;

let path = `${app.getPath('appData')}/HillTopApp/settings.json`;

let settings = new Settings(path/*`${__dirname}/../../data/settings.json`*/, {
  userType: "student"
});

settings.load();

module.exports = settings;
