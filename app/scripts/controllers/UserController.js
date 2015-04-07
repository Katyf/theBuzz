'use strict';

angular.module('MainController').controller('UserController', userController);

userController.$inject = ['UserFactory'];

function userController(UserFactory) {
  var vm = this;
  vm.user = UserFactory.user;
  vm.userId = UserFactory.userId;

  vm.newNote = function(note){
    //debugger;
    UserFactory.newNote(note).then(function(response){
        vm.note = {};
        console.log('hi from userController.newNote');
    });
  };

  vm.newLink = function(link) {
    UserFactory.newLink(link).then(function(response){
      vm.link = {};
      console.log('hi from userController.newLink');
    });
  };

}
