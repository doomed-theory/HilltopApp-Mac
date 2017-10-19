(function() {
  let iframeError = setTimeout(() => {
    window.frames[0].stop();
    displayError();
  }, 60 * 1000);

  $('iframe').on('load', function() {
     clearTimeout(iframeError);
    if (!navigator.onLine) {
      displayError();
    } else {
      $('#iframe').css('background-image', 'none');
    }
  });

  function displayError() {
    $('#iframe').css('background', 'url("../res/error/error.png") no-repeat center center').css('background-size', '128px 128px').css('background-color', 'rgb(18, 29, 37)');
  }
})();
