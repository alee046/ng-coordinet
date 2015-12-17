(function() {
  "use strict";

  angular
    .module("app")
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyD99Ifi3f2xMxKZI5hWkDuTyVtR22oHhsE',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
      });
    });

})();


