'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
//  */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MainController',
    'MainDirective'
  ])
    .constant('ServerUrl', 'http://localhost:3000')
    .constant('APIUrl', 'http://api.openweathermap.org/data/2.5/weather?q=')
    // .run(function(WeatherFactory){
    //   WeatherFactory.getWeather();
    // })
    .run(function($rootScope, $http, $window, $location, AuthFactory){
      if(AuthFactory.isAuthenticated()) {
        var data = JSON.parse($window.localStorage.getItem('ga-user'));
        $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
      } else {
        $location.path('/login');
      }

      $rootScope.$on('$routeChangeStart', function(event, next){
        if(!AuthFactory.isAuthenticated()){
          $location.path('/login');
        } else {
          //WeatherFactory.getWeather();
        }
      });
    })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// var frontendApp = angular.module('frontendAapp', []);

// frontendApp.factory('weatherService', function($http) {
//     return {
//       getWeather: function() {
//         var weather = { temp: {}, clouds: null };
//         $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=Salzburg,at&units=metric&callback=JSON_CALLBACK').success(function(data) {
//             if (data) {
//                 if (data.main) {
//                     weather.temp.current = data.main.temp;
//                     weather.temp.min = data.main.temp_min;
//                     weather.temp.max = data.main.temp_max;
//                 }
//                 weather.clouds = data.clouds ? data.clouds.all : undefined;
//             }
//         });

//         return weather;
//       }
//     };
// });

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

// frontendApp.directive('weatherIcon', function() {
//     return {
//         restrict: 'E', replace: true,
//         scope: {
//             cloudiness: '@'
//         },
//         controller: function($scope) {
//             $scope.imgurl = function() {
//                 var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
//                 if ($scope.cloudiness < 20) {
//                     return baseUrl + 'sunny.png';
//                 } else if ($scope.cloudiness < 90) {
//                    return baseUrl + 'partly_cloudy.png';
//                 } else {
//                     return baseUrl + 'cloudy.png';
//                 }
//             };
//         },
//         template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
//     };
// });
