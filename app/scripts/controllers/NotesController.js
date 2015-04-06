'use strict';

angular.module('MainController').controller('NotesController', notesController);

notesController.$inject = ['NotesFactory'];

function notesController(NotesFactory) {
  var vm = this;
  vm.notes = NotesFactory.notes;
}
