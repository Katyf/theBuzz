

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
