'use strict';

angular.module('frontendApp').factory('WeatherFactory', ['$http', '$window', 'APIUrl', function($http, $window, APIUrl){

  var currentweather = {};
  var location = 'Boston,ma';

  var getWeather = function(){
    return $http.get(APIUrl + location ).success(function(response){
      console.log(response);
      //debugger;
      angular.copy(response, currentweather);
    }).error(function(data, status, headers, config){
      console.log('Error:' + data, status, headers, config);
    });
  };

  return {
    currentweather: currentweather,
    getWeather: getWeather,
    //location: location,
    // setLocation: setLocation
  };

}]);

