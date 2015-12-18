(function() {
  "use strict";

  angular
    .module("app")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$log", "$state", "usersDataService"];

  function LoginController($log, $state, usersDataService) {
    var vm = this;

    vm.users = usersDataService;

    vm.loadUser = function() {
      $log.log("Loading:", {
        name:   vm.users.current.name,
        status: vm.users.current.status
      });

      $state.go("map");
    }
  }

})();
