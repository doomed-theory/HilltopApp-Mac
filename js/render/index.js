(function() {
  const {shell} = require('electron');
  window.$ = window.jQuery = require('jquery');
  const globalFunctionality = require('../js/global-functionality');
  globalFunctionality.sticky();
  globalFunctionality.windowController();
  globalFunctionality.keybinds.bind();
  globalFunctionality.userType.show();
  globalFunctionality.settings.render();
  globalFunctionality.settings.bindButton();
  $('#header').sticky({topSpacing: 36});
  $('.external').on('click', function(event) {
    event.preventDefault();
    shell.openExternal($(this).attr('href'));
  });
})();
