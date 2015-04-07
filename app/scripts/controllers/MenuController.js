'use strict';

angular.module('MainController').controller('MenuController', menuController);

menuController.$inject = ['AuthFactory', '$location'];

function menuController(AuthFactory, $location) {
  var vm = this;

  vm.logout = function() {
    AuthFactory.logout().then(function(){
      $location.path('/login');
      console.log('logged out!');
    });
  };

}
