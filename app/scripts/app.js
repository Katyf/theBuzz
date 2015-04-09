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
    'MainDirective',
    'drag-and-drop',
    'ui.bootstrap'
  ])
    .constant('ServerUrl', 'https://damp-thicket-9341.herokuapp.com')
    .constant('APIUrl', 'http://api.openweathermap.org/data/2.5/weather?q=')
    .run(function($rootScope, $http, $window, $location, AuthFactory){
      if(AuthFactory.isAuthenticated()) {
        var data = JSON.parse($window.localStorage.getItem('ga-user'));
        //$http.defaults.headers.common.Authorization = 'Token token=' + data.token;
      } else {
        $location.path('/login');
      }

      $rootScope.$on('$routeChangeStart', function(event, next){
        if(!AuthFactory.isAuthenticated()){
          $location.path('/login');
        } else {
          $location.path('/');
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

