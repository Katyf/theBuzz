'use strict';

angular.module('MainController').controller('WeatherController', weatherController);

weatherController.$inject = ['WeatherFactory', 'UserFactory'];

function weatherController(WeatherFactory, UserFactory) {
  var vm = this;
  vm.currentweather = WeatherFactory.currentweather;
  vm.user = UserFactory.user;
  vm.userId = UserFactory.userId;

  vm.updateLocation = function(location){
    UserFactory.updateLocation(location).then(function(response){
      vm.location = {};
      UserFactory.getUserItems();
    });
  };
}

