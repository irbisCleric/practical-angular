mainApp.service('UserListService', ['$resource'], function ($resource) {
    var resource = $resource('http://localhost:1715/api/list');

    resource.get().
        success(function (data, status, headers, config) {
            $scope.usersList = data;
        }).
        error(function (data, status, headers, config) {
            console.log(status);
        });
});

mainApp.controller('UsersListCtrl',
    ['$scope', 'UserListService',
        function ($scope, UserListService) {

        }
    ]);