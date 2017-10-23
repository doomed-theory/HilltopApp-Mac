(function() {
  const {shell} = require('electron');
  const globalFunctionality = require('../js/global-functionality');
  window.$ = window.jQuery = require('jquery');
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
  $('#content').prop('hidden', true);
  $('#content').fadeIn();
  $('.fade-link').on('click', function(event) {
    event.preventDefault();
    let href = this.href;
    $('#content').fadeOut(() => {
      window.location = href;
    });
  });
})();
