let iframeError = setTimeout(() => {
  window.frames[0].stop();
  $('iframe').css('background', 'url("../res/error/error.png") no-repeat center center').css('background-size', '128px 128px');
}, 60 * 1000);

$('iframe').on('load', function() {
  clearTimeout(iframeError);
  $(this).css('background', 'transparent');
});
