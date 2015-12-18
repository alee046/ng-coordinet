(function() {
  "use strict";

  angular
    .module("app")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$log", "$state"];

  function LoginController($log, $state) {
    var vm = this;

    vm.name   = "";
    vm.status = "";

    vm.loadUser = function() {
      $log.log("Loading:", {
        name:   vm.name,
        status: vm.status
      });

      $state.go("map");
    }
  }

})();
