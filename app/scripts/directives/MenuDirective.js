'use strict';

angular.module('MainDirective').directive('menu', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/partials/menu.html',
    controller: 'MenuController',
    controllerAs: 'menuController',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };

}]);
