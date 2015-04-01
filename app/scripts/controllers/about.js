'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
