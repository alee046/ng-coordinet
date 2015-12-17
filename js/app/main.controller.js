(function() {
  "use strict";

  angular
    .module("app")
    .controller("MainController", MainController);

  MainController.$inject = ["$scope", "uiGmapGoogleMapApi"];

  function MainController($scope, uiGmapGoogleMapApi) {
    var vm = this;

    vm.test = "This should show up.";

    $scope.map = {
      center: {
        latitude:  45,
        longitude: -73
      },
      zoom: 8
    };

    uiGmapGoogleMapApi.then(function(maps) {

    });
  }

})();
