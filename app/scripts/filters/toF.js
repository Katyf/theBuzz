// frontendApp.filter('temp', function($filter) {
//     return function(input, precision) {
//         if (!precision) {
//             precision = 1;
//         }
//         var numberFilter = $filter('number');
//         return numberFilter(input, precision) + '\u00B0C';
//     };
// });

// frontendApp.controller('WeatherCtrl', function ($scope, weatherService) {
//     $scope.weather = weatherService.getWeather();
// });

(function() {
  'use strict';

  angular.module('frontendApp')
  .filter('toF', toF);

  function toF() {
    return function(param) {
      if (param) {
        return Math.floor((param - 273.15)*1.8 + 32);
      }
    };
  }
})();




