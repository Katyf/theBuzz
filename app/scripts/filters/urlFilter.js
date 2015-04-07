(function() {
  'use strict';

  angular.module('frontendApp')
  .filter('urlFilter', urlFilter);

  function urlFilter() {
    return function(param) {
            if (param) {
                return param.replace(/\.com/g, '').split(' ').map(function(word) {
                    return word[0].toUpperCase() + word.slice(1);
                }).join(' ');
            }
        };
  }

})();

