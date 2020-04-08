
require(['jquery', 'perfect-scrollbar'], function ($, perfectScrollbar) {
  (function() {
    isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
  
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      $('.sidebar .sidebar-wrapper, .main-panel').each(e => {
        perfectScrollbar.default(e);
      });
  
      $('html').addClass('perfect-scrollbar-on');
    } else {
      $('html').addClass('perfect-scrollbar-off');
    }
  })();
});
