'use strict';

/**
 * @ngdoc overview
 * @name angularPracticeApp
 * @description
 * # angularPracticeApp
 *
 * Main module of the application.
 */
var mainApp = angular
  .module('angularPracticeApp', ['ngRoute']);

mainApp.config(function($routeProvider){
    $routeProvider.
        when("/home", { templateUrl: '../views/welcome.html' }).
        when("/list", { templateUrl: '../views/list.html', controller: "ListCtrl" }).
        when("/404",  { templateUrl: '../404.html' }).
        when("/item/:id",  { templateUrl: '../views/detail.html' }).
        otherwise({ redirectTo: '/home' });
});

mainApp.controller('ListCtrl', ['$scope', '$http', function ($scope, $http) {
  var url = 'http://localhost:1715/api/list';

  $http.get(url).
    success(function(data, status, headers, config) {
        $scope.listItems = data;
    }).
    error(function(data, status, headers, config) {
        console.log(status);
    });

}]);

mainApp.controller('ItemCtrl', ['$scope', '$http', function ($scope, $http) {

}]);