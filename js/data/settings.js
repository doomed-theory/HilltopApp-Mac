const {Settings} = require('../lib').settings;

let settings = new Settings(`${__dirname}/../../data/settings.json`, {
  userType: "student"
});

settings.load();

module.exports = settings;
