'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:NoteCtrl
 * @description
 * # NoteCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('NoteCtrl', function ($scope, note, $routeParams) {
    note.get({ id: $routeParams.id }, function(data) {
        $scope.note = data;
    });
  });
