'use strict';

angular.module('MainDirective').directive('signupForm', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/signup-form.html',
    controller: 'SignupController',
    controllerAs: 'signupController',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };

}]);
