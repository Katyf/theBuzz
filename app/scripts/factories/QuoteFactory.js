'use strict';

angular.module('frontendApp').factory('QuoteFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var quotes = [];

  var getQuotes = function(){
      return $http.get(ServerUrl + '/quotes').success(function(response){
      console.log(response);
      angular.copy(response, quotes);
    }).error(function(data, status, headers, config){
      console.log('Error:' + data, status, headers, config);
    });
  };


  return {
    getQuotes: getQuotes,
    quotes: quotes
  };

}]);
