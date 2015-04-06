// (function() {
//     'use strict';

//     angular
//         .module('frontendApp')
//         .controller('HomeCtrl', HomeCtrl);

//     HomeCtrl.$inject = ['WeatherFactory'];

//     function HomeCtrl(WeatherFactory) {
//         var vm = this;
//         vm.currentweather = WeatherFactory.currentweather;

//     }

// })();

'use strict';

angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = [];

function homeController() {

};
