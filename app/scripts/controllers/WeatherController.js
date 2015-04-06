(function() {
    'use strict';

    angular
        .module('frontendApp')
        .controller('WeatherCtrl', WeatherCtrl);

    MainCtrl.$inject = ['WeatherFactory'];

    function WeatherCtrl(WeatherFactory) {
        var vm = this;

        vm.weather = WeatherFactory.weather;
    }

})();
