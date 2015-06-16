'use strict';

/**
 * @ngdoc overview
 * @name notesApp
 * @description
 * # notesApp
 *
 * Main module of the application.
 */
angular
  .module('notesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .when('/nodes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .when('/notes/:id', {
        templateUrl: 'views/note.html',
        controller: 'NoteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
