module.exports = () => {
  const {remote} = require('electron'),
        help = require('./help');

  $('body').prepend(
    ` <div id="window-bar">
        <button id="settings">Settings</button><!--
        --><hr class="window-bar-button-separator"><!--
        --><button id="help">Help</button><!--
        --><hr class="window-bar-button-separator"><!--
        --><div id="window-controllers"><!--
          --><button id="minimize-window">_</button><!--
          --><button id="maximize-window">🗖</button><!--
          --><button id="close-window">X</button>
        </div>
      </div>`
  );

  $("#window-controller").sticky({topSpacing: 0});

  let win = remote.getCurrentWindow();

  $('#help').on('click', () => help.show());

  $('#minimize-window').click(() => win.minimize());

  $('#maximize-window').click(function() {
    if (!win.isMaximized()) {
      win.maximize();
    } else {
      win.unmaximize();
    }
  });

  $('#close-window').click(() => win.close());
};
