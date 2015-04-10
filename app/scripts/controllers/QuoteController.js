'use strict';

angular.module('MainController').controller('QuoteController', quoteController);

quoteController.$inject = ['QuoteFactory'];

function quoteController(QuoteFactory) {
  var vm = this;
  vm.quotes = QuoteFactory.quotes;

}
