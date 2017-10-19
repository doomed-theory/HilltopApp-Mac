const Mousetrap = require('mousetrap'),
      help = require('./help'),
      settingsRenderer = require('./settings');

let settings = require('../data/settings');

let shortcuts = {
  portal: ['command+shift+p', 'ctrl+shift+p'],
  schedule: ['command+shift+s', 'ctrl+shift+s'],
  calendar: ['command+shift+c', 'ctrl+shift+c'],
  help: ['command+shift+h', 'ctrl+shift+h'],
  settings: ['esc']
}

module.exports = {
  shortcuts: shortcuts,
  bind: () => {
    Mousetrap.bind(shortcuts.portal, () => {
      if (settings.settings.userType === 'parent') window.location.href = './parent-portal.html';
      else if (settings.settings.userType === 'faculty') window.location.href = './faculty-portal.html';
      else window.location.href = './student-portal.html'
    });
    Mousetrap.bind(shortcuts.schedule, () => window.location.href = './schedule.html');
    Mousetrap.bind(shortcuts.calendar, () => window.location.href = './calendar.html');
    Mousetrap.bind(shortcuts.help, () => help.show());
    Mousetrap.bind(shortcuts.settings, () => settingsRenderer.toggle());
  }
};
