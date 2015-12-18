(function() {
  "use strict";

  angular
    .module("app")
    .controller("MapController", MapController);

  MapController.$inject = ["$log", "$scope", "uiGmapGoogleMapApi", "usersDataService", "geolocateService", "socketService"];

  function MapController($log, $scope, uiGmapGoogleMapApi, usersDataService, geolocateService, socketService) {
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

      socketService.emit('location', vm.users.current);
    })

    $scope.$on("socket:location", function(evt, data) {
      $log.log("User located!", evt, data);

      // $scope.map.markers
    });

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
