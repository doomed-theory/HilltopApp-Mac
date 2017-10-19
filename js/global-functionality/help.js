const {remote} = require('electron'),
      {dialog} = remote.require('electron');

let message = `Keyboard Shortcuts:\n\nPortal: 'CMD + SHIFT + P'\nSchedule: 'CMD + SHIFT + S'\nCalendar: 'CMD + SHIFT + C'\nHelp: 'CMD + SHIFT + H'`;

module.exports = {
  message: message,
  show: () => {
    return new Promise(resolve => {
      $('#help').prop('disabled', true);
      dialog.showMessageBox({
        message: message,
        title: 'Keyboard Shortcuts'
      }, () => $('#help').prop('disabled', false));
    });
  }
}
