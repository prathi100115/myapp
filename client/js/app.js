// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('main', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      }).state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'TodoController',
        parent:'main'
      }).state('assert', {
        url: '/assert',
        templateUrl: 'views/assert/assert.html',
        controller: 'TodoController',
        parent:'main'
      });

    $urlRouterProvider.otherwise('home');
  }]).controller("MainController",function($scope){

  });
