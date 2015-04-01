'use strict';

/**
 * @ngdoc service
 * @name notesApp.note
 * @description
 * # note
 * Factory in the notesApp.
 */
angular.module('notesApp')
  .factory('note', function ($resource) {
    var note = $resource("http://private-ad0b0-demoapi24.apiary-mock.com/notes/:id");
    note.prototype.update = function(cb) {
      return note.save(this)
        .$promise.then(
          //success
          function( value ){/*Do something with value*/},
          //error
          function( error ){/*Do something with error*/}
        )
    };

    return note;
  });
