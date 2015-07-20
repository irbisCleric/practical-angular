/**
 * Created by skok on 20/07/15.
 */
module.exports = function (mainApp) {
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
};