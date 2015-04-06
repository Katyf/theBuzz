'use strict';

angular.module('MainController').controller('WeatherController', weatherController);

weatherController.$inject = ['WeatherFactory'];

function weatherController(WeatherFactory) {
  var vm = this;
  vm.currentweather = WeatherFactory.currentweather;
}
