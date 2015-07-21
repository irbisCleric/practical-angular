module.exports = function (mainApp) {
    mainApp.service('UserListService', ['$scope', '$http',
        function ($scope, $http) {
            //var resource = $resource('http://localhost:1715/api/list');

                this.getUsers =  function () {
                    return $http.get('http://localhost:1715/api/list').
                        success(function (data, status, headers, config) {
                            $scope.usersList = data;
                        }).
                        error(function (data, status, headers, config) {
                            console.log(status);
                        });
                };

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