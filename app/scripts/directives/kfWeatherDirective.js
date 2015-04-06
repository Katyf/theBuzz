// (function() {
//     'use strict';

//     angular
//         .module('frontendApp')
//         .directive('kfWeather', kfWeather);

//     kfWeatherCtrl.$inject = ['WeatherFactory'];

//     function kfWeatherCtrl(WeatherFactory) {
//         var vm = this;
//     }

//     function kfWeather() {
//         return {
//             restrict: 'E',
//             templateUrl: 'views/kfWeather.html',
//             scope: {
//                 weather: '='
//             },
//             controller: kfWeatherCtrl,
//             controllerAs: 'kfWeatherCtrl',
//             bindToController: true
//         };
//     }

// })();

'use strict'

angular.module('MainDirective').directive('kfWeather', [function(){
    return {
      restrict: 'E',
      templateUrl: 'views/kfWeather.html',
      scope: {
          weather: '='
      },
      controller: 'WeatherController',
      controllerAs: 'weatherControllerr',
      bindToController: true
    };

}]);
