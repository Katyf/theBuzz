
(function() {
  'use strict';

  angular.module('frontendApp')
  .filter('xmlFilter', xmlFilter);

  function xmlFilter() {
    return function(param) {
            if (param) {
                return param.replace(/&#8217;/g, "'").replace(/&#8220;/g, '"');
            }
        };
  }

})();

