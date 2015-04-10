'use strict';

angular.module('MainController').controller('TimeController', timeController);

timeController.$inject = ['$scope', '$timeout'];

function timeController($scope, $timeout) {
  $scope.clock = '';
  $scope.tickInterval = 1000

  var tick = function() {
    $scope.clock = Date.now();
    $timeout(tick, $scope.tickInterval);
  };

  $timeout(tick, $scope.timeInterval);
}

