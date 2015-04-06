(function() {
  'use strict';

  angular.module('frontendApp')
  .filter('toF', toF);

  function toF() {
    return function(param) {
      if (param) {
        return Math.floor((param - 273.15)*1.8 + 32);
      }
    };
  }
})();




