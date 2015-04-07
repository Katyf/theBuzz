'use strict';

angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = ['WeatherFactory', 'UserFactory'];

function homeController(WeatherFactory, UserFactory) {
  WeatherFactory.getWeather();
  UserFactory.getUserItems();
}
