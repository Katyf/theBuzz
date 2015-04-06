(function() {
    'use strict';

    angular
        .module('frontendApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['WeatherFactory'];

    function MainCtrl(WeatherFactory) {
        var vm = this;

        vm.weather = WeatherFactory.weather;
    }

})();
