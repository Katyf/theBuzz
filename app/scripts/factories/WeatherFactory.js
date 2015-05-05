'use strict';

angular.module('frontendApp').factory('WeatherFactory', ['$http', '$window', 'APIUrl', 'ServerUrl',function($http, $window, APIUrl, ServerUrl){

  var user = {};
  var userId;
  var currentweather = {};
  var zipcode;

  var setUserId = function(){
    var data = JSON.parse(localStorage.getItem('ga-user'));
    userId = data.id;
    console.log(userId);
    return userId;
  };

  var getUserLocation = function(){
    var data = JSON.parse(localStorage.getItem('ga-user'));
    zipcode = data.zipcode;
    console.log(zipcode);
    return zipcode;
    //   setUserId();
    //   //debugger;
    //   return $http.get(ServerUrl + '/users/' + userId).success(function(response){
    //   angular.copy(response.zipcode, zipcode);
    //   //debugger;

    // }).error(function(data, status, headers, config){
    //   console.log('Error:' + data, status, headers, config);
    // });
  };

  var updateLocation = function(location) {
    setUserId();
    var params = {setting: location};
    return $http.$.post(ServerUrl + '/users/' + userId + '/notes', params).success(function(response){
      console.log(response);
      console.log('Location updated');
    });
  };

  var getWeather = function(){
    getUserLocation();
    return $http.get(APIUrl + zipcode + ',us').success(function(response){
      console.log(response);
      angular.copy(response, currentweather);
    }).error(function(data, status, headers, config){
      console.log('Error:' + data, status, headers, config);
    });
  };

  return {
    currentweather: currentweather,
    getWeather: getWeather,
    getUserLocation: getUserLocation,
    zipcode: zipcode,
    updateLocation: updateLocation
  };

}]);

