module.exports = function (mainApp) {
    mainApp.factory('UserListFactory', ['$resource',
        function ($resource) {
            var url = 'http://localhost:1715/api/list';
            return $resource(url);
        }
    ]);
};