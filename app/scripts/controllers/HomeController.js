'use strict';

angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = ['WeatherFactory', 'UserFactory', 'QuoteFactory'];

function homeController(WeatherFactory, UserFactory, QuoteFactory) {
  WeatherFactory.getWeather();
  UserFactory.getUserItems();
  QuoteFactory.getQuotes();
}
