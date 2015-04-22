'use strict';

/**
 * @ngdoc function
 * @name angularPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPracticeApp
 */
angular.module('angularPracticeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
