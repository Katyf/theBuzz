(function() {
  'use strict';

  angular.module('frontendApp')
  .filter('timeFilter', timeFilter);

  function timeFilter() {
    return function(param) {
      if (param) {
        if (param < 12) {
          return 'Good Morning';
        } else if (param < 16) {
          return 'Good Afternoon';
        } else {
          return 'Good Evening';
        }
      }
    };
  }
})();


