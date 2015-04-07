'use strict';

angular.module('frontendApp').factory('AuthFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){

  var signup = function(credentials) {
    console.log(credentials);
    return $http.post(ServerUrl + '/users', credentials).success(function(response){
      _storeSession(response);
      console.log('success!');
    });
  };
  var login = function(credentials){
    console.log(credentials);
    return $http.post(ServerUrl + '/login', credentials).success(function(response){
      _storeSession(response);
    });
  };

  var logout = function(){
    console.log('from AuthFactory');
    return $http.get(ServerUrl + '/logout').success(function(){
      $window.localStorage.removeItem('ga-user');
    });
  };

  var isAuthenticated = function(){
    var data = JSON.parse($window.localStorage.getItem('ga-user'));
    if(data) return !!data.token;
    // !! turns it into a boolean
    return false;
  };

  var clearStorage = function(){

  };

  var _storeSession = function(data){
    $window.localStorage.setItem('ga-user', JSON.stringify(data));
    $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
  };

  return {
    signup: signup,
    login: login,
    logout: logout,
    isAuthenticated: isAuthenticated,
    clearStorage: clearStorage,
  };
}]);
