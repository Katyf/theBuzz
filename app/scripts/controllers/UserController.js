'use strict';

angular.module('MainController').controller('UserController', userController);

userController.$inject = ['UserFactory'];

function userController(UserFactory) {
  var vm = this;
  vm.user = UserFactory.user;
}
