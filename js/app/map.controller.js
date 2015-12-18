(function() {
  "use strict";

  angular
    .module("app")
    .controller("MapController", MapController);

  MapController.$inject = ["$scope", "uiGmapGoogleMapApi", "usersDataService"];

  function MapController($scope, uiGmapGoogleMapApi, usersDataService) {
    var vm = this;

    vm.users = usersDataService;

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
