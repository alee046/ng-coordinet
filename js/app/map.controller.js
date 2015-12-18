(function() {
  "use strict";

  angular
    .module("app")
    .controller("MapController", MapController);

  MapController.$inject = ["$scope", "uiGmapGoogleMapApi", "usersDataService", "geolocateService"];

  function MapController($scope, uiGmapGoogleMapApi, usersDataService, geolocateService) {
    var vm = this;

    vm.users = usersDataService;

    geolocateService.getCurrentPosition().then(function(position) {
      vm.users.current.lat = position.coords.latitude;
      vm.users.current.lng = position.coords.longitude;

      $scope.map.center = {
        latitude:  vm.users.current.lat,
        longitude: vm.users.current.lng
      };

      $scope.map.zoom = 14;
    })

    $scope.map = {
      center: {
        latitude:  34.06,
        longitude: -118.3
      },
      zoom: 12
    };

    uiGmapGoogleMapApi.then(function(maps) {

    });
  }

})();
