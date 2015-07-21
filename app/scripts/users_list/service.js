module.exports = function (mainApp) {
    mainApp.factory('UserListFactory', ['$scope', '$http',
        function ($scope, $resource) {
            //var resource = $resource('http://localhost:1715/api/list');

            return $resource('http://localhost:1715/api/list', {
                format: 'json'
            });

            /*this.getUsers = function () {
             resource.get().
             success(function (data, status, headers, config) {
             $scope.usersList = data;
             }).
             error(function (data, status, headers, config) {
             console.log(status);
             });
             };*/
        }
    ]);
};