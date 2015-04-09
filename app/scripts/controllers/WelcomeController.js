'use strict';

angular.module('MainController').controller('WelcomeController', welcomeController);

welcomeController.$inject = ['UserFactory'];

function welcomeController(UserFactory) {
  var vm = this;
  vm.user = UserFactory.user;
  vm.userId = UserFactory.userId;
}
