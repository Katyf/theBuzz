'use strict';

angular.module('MainDirective').directive('userItems', [function(){
    return {
            restrict: 'E',
            templateUrl: 'views/user-items.html',
            scope: {
                user: '='
            },
            controller: 'UserController',
            controllerAs: 'userController',
            bindToController: true
        };
}]);
