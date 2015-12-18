(function() {
  "use strict";

  angular
    .module("app")
    .factory("socketService", socketService);

  socketService.$inject = ['$log', 'socketFactory', 'io'];

  function socketService($log, socketFactory, io) {
    var socket = socketFactory({
      ioSocket: io.connect('https://shrouded-brook-8349.herokuapp.com/')
    });

    socket.on('connect', function () {
      $log.log("We are connected!");

      socket.forward('location');
    });

    return socket;
  }

})();
