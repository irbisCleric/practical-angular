/**
 * Created by skok on 20/07/15.
 */
module.exports = function (mainApp) {
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
};