/**
 * Created by skok on 20/07/15.
 */
module.exports = function (mainApp) {
    mainApp.controller('SingleUserCtrl', ['$scope', '$stateParams', 'UserDetailFactory',
        function ($scope, $stateParams, UserDetailFactory) {

            UserDetailFactory
                .get({
                    userId: $stateParams.itemId
                })
                .$promise
                .then(function (resp) {
                    $scope.user = resp;
                })
                .catch(function(resp) {
                    console.error('Gists error', resp.status, resp.data);
                });
        }
    ]);

    mainApp.controller('CommentsListCtrl', ['$scope', '$stateParams', 'UserCommentsFactory',
        function ($scope, $stateParams, UserCommentsFactory) {

            UserCommentsFactory
                .query({
                    userId: $stateParams.itemId
                })
                .$promise
                .then(function (resp) {
                    $scope.commentsList = resp;
                })
                .catch(function(resp) {
                    console.error('Gists error', resp.status, resp.data);
                });
        }
    ]);
};