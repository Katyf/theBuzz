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


(function() {
    'use strict';

    angular
        .module('frontendApp')
        .directive('kfWeather', kfWeather);

    kfWeatherCtrl.$inject = ['WeatherFactory'];

    function kfWeatherCtrl(JobFactory) {
        var vm = this;
        vm.getWeather = function(weather) {
        };
    }

    function kfWeather() {
        return {
            restrict: 'E',
            templateUrl: 'views/kfWeather.html',
            scope: {
                jobs: '='
            },
            controller: kfWeatherCtrl,
            controllerAs: 'kfWeatherCtrl',
            bindToController: true
        };
    }

})();
