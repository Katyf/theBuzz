'use strict';

angular.module('frontendApp').factory('UserFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var user = {};
  var userId = 1;

  var setUserId = function(){
    //debugger;
    var data = JSON.parse(localStorage.getItem('ga-user'));
    userId = data.id;
    console.log(userId);
    return userId;
  };

  var getUserItems = function(){
      setUserId();
      return $http.get(ServerUrl + '/users/' + userId).success(function(response){
      console.log(response);
      angular.copy(response, user);
    }).error(function(data, status, headers, config){
      console.log('Error:' + data, status, headers, config);
    });
  };


  var newNote = function(note){
    setUserId();
    var params = {note: note};
    return $http.post(ServerUrl + '/users/' + userId + '/notes', params).success(function(response){
      console.log(response);
      console.log('Note created! Hello from UserFactory.newNote');
    });
  };

  var deleteNote = function(note){
    return $http.delete(ServerUrl + '/users/' + userId + '/notes/' + note.id).success(function(){
      console.log('note deleted');
    });
  };

  var newLink = function(link){
    setUserId();
    var params = {link: link};
    return $http.post(ServerUrl + '/users/' + userId + '/links', params).success(function(response){
      console.log(response);
      console.log('Link created! Hello from UserFactory.newLink');
    });
  };

  var deleteLink = function(link){
    return $http.delete(ServerUrl + '/users/' + userId + '/links/' + link.id).success(function(){
      console.log('link deleted');
    });
  };

  var newFeed = function(feedparams){
    setUserId();
    console.log(feedparams);
    return $http.post(ServerUrl + '/users/' + userId + '/feeds', feedparams).success(function(response){
      console.log(response);
      console.log('Feed Created! Hi from UserFactory.newFeed');
    });

  };
  var deleteFeed = function(feed){
    return $http.delete(ServerUrl + '/users/' + userId + '/feeds/' + feed.id).success(function(){
      console.log('feed deleted');
    });
  };

  return {
    user: user,
    setUserId: setUserId,
    getUserItems: getUserItems,
    newNote: newNote,
    deleteNote: deleteNote,
    newLink: newLink,
    deleteLink: deleteLink,
    newFeed: newFeed,
    deleteFeed: deleteFeed
  };

}]);
