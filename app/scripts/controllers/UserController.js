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
        UserFactory.getUserItems();
    });
  };
  vm.deleteNote = function(note){
    UserFactory.deleteNote(note);
    console.log('hi from UserController.deleteNote');
  };

  vm.newLink = function(link) {
    UserFactory.newLink(link).then(function(response){
      vm.link = {};
      console.log('hi from userController.newLink');
      UserFactory.getUserItems();
    });
  };

  vm.deleteLink = function(link){
    UserFactory.deleteLink(link);
    console.log('hi from UserController.deleteLink');
  };

  vm.newFeed = function(feedparams) {
    UserFactory.newFeed({feed: feedparams}).then(function(response){
      vm.feedparams = {};
      console.log('hi from userController.newFeed');
      UserFactory.getUserItems();
    });
  };

  vm.deleteFeed = function(feed){
    UserFactory.deleteFeed(feed);
    console.log('hi from UserController.deleteFeed');
  };

}
