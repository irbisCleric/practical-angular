/**
 * Created by skok on 20/07/15.
 */
module.exports = function (mainApp) {
    mainApp.controller('HeaderController', ['$scope', '$location', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);
};