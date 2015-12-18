(function() {
  "use strict";

  angular
    .module("app", [
      "uiGmapgoogle-maps",
      "ui.router",
      "btford.socket-io"
    ])
    .constant("io", window.io);

})();
