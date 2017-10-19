let settings = require('../data/settings');

module.exports = {
  show: () => {
    $('.student, .parent, .faculty').hide();

    if (settings.settings.userType === "parent") $('.parent').show();
    else if (settings.settings.userType === "faculty") $('.faculty').show();
    else $('.student').show();
  }
};
