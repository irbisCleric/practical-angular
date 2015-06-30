'use strict';

/**
 * @ngdoc overview
 * @name angularPracticeApp
 * @description
 * # angularPracticeApp
 *
 * Main module of the application.
 */

"use strict";

require('./vendors')();

var mainApp = angular.module('angularPracticeApp', [
        'ui.router',
        'ngResource'
]);

mainApp.config(function ($stateProvider, $urlRouterProvider) {

    // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
    // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
    // Here we are just setting up some convenience urls.
    $urlRouterProvider.otherwise("/home");


    // Use $stateProvider to configure your states.
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: '../views/welcome.html'
        })
        .state("contacts", {
            url: "/contacts",
            templateUrl: "../views/contacts.list.html",
            controller: "UsersListCtrl"
        })
        .state("detail", {
            url: "/contacts/:itemId",
            templateUrl: "../views/contacts.detail.html",
            controller: "SingleUserCtrl"
        })
        .state("404", {
            url: "/404",
            templateUrl: "../404.html"
        });
});

mainApp.controller('UsersListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        var url = 'http://localhost:1715/api/list';

        $http.get(url).
            success(function (data, status, headers, config) {
                $scope.usersList = data;
            }).
            error(function (data, status, headers, config) {
                console.log(status);
            });
    }
]);

mainApp.controller('SingleUserCtrl', ['$scope', '$http', '$stateParams',
    function ($scope, $http, $stateParams) {
        var url = 'http://localhost:1715/api/list/' + $stateParams.itemId;

        $http.get(url).
            success(function (data, status, headers, config) {
                $scope.user = data;
            }).
            error(function (data, status, headers, config) {
                console.log(status);
            });
        }
]);

mainApp.controller('CommentsListCtrl', ['$scope', '$http', '$stateParams',
    function ($scope, $http, $stateParams) {
        var url = 'http://localhost:1715/api/comments/' + $stateParams.itemId;

        $http.get(url).
            success(function (data, status, headers, config) {
                $scope.commentsList = data;
            }).
            error(function (data, status, headers, config) {
                console.log(status);
            });
    }
]);

mainApp.controller('HeaderController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);