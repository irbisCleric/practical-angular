/**
 * Created by irbis on 24.06.15.
 */

var PATHS = {
    bower: __dirname + '/app/vendors/',
    build: __dirname + '/app/build/',
    src: __dirname + '/app/scripts/'
};

module.exports = {
    context: PATHS.src,
    entry: './app.js',
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: [
            PATHS.bower,
            'node_modules'
        ]
    }
};