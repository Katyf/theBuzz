'use strict';

angular.module('MainDirective').directive('notesList', [function(){
    return {
            restrict: 'E',
            templateUrl: 'views/noteslist.html',
            scope: {
                jobs: '='
            },
            controller: 'NotesController',
            controllerAs: 'notesController',
            bindToController: true
        };
}]);
