/**
 * Created by skok on 21/07/15.
 */
module.exports = function (mainApp) {
    mainApp.service('UserDetailFactory', ['$resource',
        function ($resource) {
            var url = 'http://localhost:1715/api/list/';
            return $resource(url + ':userId', {
                userId: 'user'
            });
        }
    ]);

    mainApp.service('UserCommentsFactory', ['$resource',
        function ($resource) {
            var url = 'http://localhost:1715/api/comments/';
            return $resource(url + ':userId', {
                userId: 'user'
            });
        }
    ]);
};