(function() {
  "use strict";

  angular
    .module("app")
    .factory("usersDataService", usersDataService);

  usersDataService.$inject = [];

  function usersDataService() {
    var users = {
      all:     [],
      current: {
        id:     guid(),
        name:   "",
        status: "",
        lat:    "",
        lng:    ""
      }
    };

    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16).substring(1);
      };
      return s4() + s4() + '-' + s4() + '-' + s4() + s4();
    }

    return users;
  }

})();
