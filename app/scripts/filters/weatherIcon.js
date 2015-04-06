(function() {
  'use strict';

  angular.module('frontendApp')
  .filter('weatherIcon', weatherIcon);

  function weatherIcon() {
    return function(param) {
      if (param) {
        if (param < 20) {
          return 'day-sunny';
        } else if (param < 90) {
          return 'day-cloudy';
        } else {
          return 'cloudy';
        }
      }
    };
  }
})();

