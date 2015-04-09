'use strict';

angular.module('frontendApp').factory('WeatherFactory', ['$http', '$window', 'APIUrl', function($http, $window, APIUrl){

  var currentweather = {};
  var location = 'Boston,ma';

  // var setLocation = function(){
  //   var userId = UserFactory.setUserId();
  //   var settings;
  //   debugger;
  //   return $http.get(ServerUrl + '/users/' + userId + '/settings/1').success(function(response){
  //     console.log(response);
  //     angular.copy(response, settings);
  //   }).error(function(data, status, headers, config){
  //     console.log('Error:' + data, status, headers, config);
  //   });
  // };


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

// (function() {
//   'use strict';

//   angular
//     .module('frontendApp')
//     .factory('WeatherFactory', WeatherFactory);

//     WeatherFactory.$inject = ['$http', 'APIUrl'];

//     function WeatherFactory($http, APIUrl) {
//       var currentweather = {};

//       function getWeather() {
//         return $http.get(APIUrl + 'Boston,ma')
//                 .then(function(response) {
//                   console.log(response.data);
//                     angular.copy(response.data, currentweather);
//                 });
//       }


//       return {
//         currentweather: currentweather,
//         getWeather: getWeather
//       };


//     }

// })();
