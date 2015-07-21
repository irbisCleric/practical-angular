/**
 * Created by skok on 20/07/15.
 */
module.exports = function (mainApp) {
    mainApp.controller('UsersListCtrl', ['$scope', '$http', 'UserListFactory',
        function ($scope, $http, UserListFactory) {

            UserListFactory
                .query()
                .$promise
                .then(function (data) {
                    $scope.usersList = data;
                })
                .catch(function(response) {
                    console.error('Gists error', response.status, response.data);
                });
        }
    ]);
};