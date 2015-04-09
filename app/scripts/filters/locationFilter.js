(function() {
  'use strict';

  angular.module('frontendApp')
  .filter('locationFilter', locationFilter);

  function locationFilter() {
    return function(param) {
            if (param) {
                return param.replace(/,+[a-z]+/g, '');
            }
        };
  }

})();

