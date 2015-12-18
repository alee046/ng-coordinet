(function() {
  "use strict";

  angular
    .module("app")
    .controller("MapController", MapController);

  MapController.$inject = ["$scope", "uiGmapGoogleMapApi"];

  function MapController($scope, uiGmapGoogleMapApi) {
    var vm = this;

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
