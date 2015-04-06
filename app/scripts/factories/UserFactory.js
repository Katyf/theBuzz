'use strict';

angular.module('frontendApp').factory('UserFactory', ['$http', 'ServerUrl', 'UserId', function($http, ServerUrl, UserId){

  var user = {};

  var getUserItems = function(){
    return $http.get(ServerUrl + '/users/' + UserId).success(function(response){
      console.log(response);
      //debugger;
      angular.copy(response, user);
    }).error(function(data, status, headers, config){
      console.log('Error:' + data, status, headers, config);
    });
  };

  return {
    user: user,
    getUserItems: getUserItems
  };

}]);
