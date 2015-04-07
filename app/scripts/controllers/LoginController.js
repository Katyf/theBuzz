'use strict';

angular.module('MainController').controller('LoginController', loginController);

loginController.$inject = ['AuthFactory', '$location'];

function loginController(AuthFactory, $location) {
  var vm = this;

  vm.login = function(credentials){
    //debugger;
    AuthFactory.login(credentials).then(function(response){
      vm.credentials = {};
      $location.path('/');
    });
  };

}
