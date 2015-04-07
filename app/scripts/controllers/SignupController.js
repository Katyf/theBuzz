'use strict';

angular.module('MainController').controller('SignupController', signupController);

signupController.$inject = ['AuthFactory', '$location'];

function signupController(AuthFactory, $location) {
  var vm = this;

  vm.signup = function(credentials){
    AuthFactory.signup({ user: credentials }).then(function(response){
      vm.credentials = {};
      $location.path('/');
    });
  };
}
