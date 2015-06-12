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

mainApp.config(function ($routeProvider) {
    $routeProvider.
        when("/home", {templateUrl: '../views/welcome.html'}).
        when("/list", {templateUrl: '../views/list.html', controller: "UsersListCtrl"}).
        when("/list/:id", {templateUrl: '../views/detail.html'}).
        when("/404", {templateUrl: '../404.html'}).
        otherwise({redirectTo: '/list'});
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

mainApp.controller('SingleUserCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        var url = 'http://localhost:1715/api/list/' + $routeParams.id;

        $http.get(url).
            success(function (data, status, headers, config) {
                $scope.user = data;
            }).
            error(function (data, status, headers, config) {
                console.log(status);
            });
        }
]);

mainApp.controller('CommentsListCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        var url = 'http://localhost:1715/api/comments/' + $routeParams.id;

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