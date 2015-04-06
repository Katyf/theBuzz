'use strict';

angular.module('frontendApp').factory('NotesFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var notes = [];
  var note = {};

  var getNotes = function(){
    return $http.get(ServerUrl + '/notes').success(function(response){
      console.log(response);
      //debugger;
      angular.copy(response, notes);
    }).error(function(data, status, headers, config){
      console.log('Error:' + data, status, headers, config);
    });
  };

  return {
    notes: notes,
    note: note,
    getNotes: getNotes
  };

}]);

