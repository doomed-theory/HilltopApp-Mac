const {remote} = require('electron');

let win = remote.getCurrentWindow();

$('#minimize-window').click(function() {
  win.minimize();
});

$('#maximize-window').click(function() {
  if (!win.isMaximized()) {
    win.maximize();
  } else {
    win.unmaximize();
  }
});

$('#close-window').click(function() {
  win.close();
});
