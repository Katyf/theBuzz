'use strict';

angular.module('MainController').controller('TabController', tabController);

tabController.$inject = [];

function tabController() {
  var vm = this;
  vm.tab = 1;

  vm.isSet = function(tabName) {
    return this.tab === tabName;
  };

  vm.setTab = function(newValue) {
    this.tab = newValue;
  };

}
