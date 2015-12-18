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
        id:     "",
        name:   "",
        status: "",
        lat:    "",
        lng:    ""
      }
    };

    return users;
  }

})();
