//var frontendApp = angular.module('frontendAapp', []);

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
(function() {
  'use strict';

  angular
    .module('frontendApp')
    .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http', 'APIUrl'];

    function WeatherFactory($http, APIUrl) {
      var currentweather = {};

      function getWeather() {
        return $http.get(APIUrl + 'Boston,ma')
                .then(function(response) {
                  console.log(response.data);
                    angular.copy(response.data, currentweather);
                });
      }


      return {
        currentweather: currentweather,
        getWeather: getWeather
      };


    }

})();
