'use strict';

angular.module('frontendApp').factory('QuoteFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var quotes = [];

  var shuffleQuotes = function(quotes) {
  var length = quotes.length;
  var t, i;
  while (length) {
    i = Math.floor(Math.random() * length--);
    t = quotes[length];
    quotes[length] = quotes[i];
    quotes[i] = t;
  }

  return quotes;
};

  var getQuotes = function(){
      return $http.get(ServerUrl + '/quotes').success(function(response){
      console.log(response);
      angular.copy(response, quotes);
      shuffleQuotes(quotes);
    }).error(function(data, status, headers, config){
      console.log('Error:' + data, status, headers, config);
    });
  };


  return {
    getQuotes: getQuotes,
    quotes: quotes,
    shuffleQuotes: shuffleQuotes
  };

}]);
