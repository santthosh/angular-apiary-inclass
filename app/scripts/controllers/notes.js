'use strict';

// UI Router

/**
 * @ngdoc function
 * @name notesApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('NotesCtrl', function ($scope, note) {
    $scope.errorText = "";
    $scope.saveText = "Create Note";
    note.query(function(data) {
        $scope.notes = data;
    });

    $scope.deleteNote = function(note_id) {
        var delete_note = {};
        delete_note.id = note_id;
        note.delete(delete_note);
        for (var i = 0; i < $scope.notes.length; i++)
            if ($scope.notes[i].id && $scope.notes[i].id === note_id) { 
                $scope.notes.splice(i, 1);
                break;
            }
        }

    $scope.saveNote = function(){
        $scope.saveText = "Creating...";
        $scope.errorText = "";
        note.save($scope.note).$promise.then(function(value){
            $scope.saveText = "Create Note";
            var new_note = angular.copy($scope.note);
            // Should replace this with value.id
            // but apiary is returning same id always
            // so this will ensure a unique id for our
            // angular list
            new_note.id = Date.now();
            $scope.notes.push(new_note);

            //Clear our inputs
            $scope.note.title = "";
            $scope.note.text = "";
        }, function(error){
            $scope.errorText = "There was an error";
            console.log(error);
            $scope.saveText = "Create Note";
        });
    }
  });
