/**
 * Created by irbis on 24.06.15.
 */

var bowerFolder = __dirname + '/app/vendors/',
    outputPath = __dirname + '/app/build/',
    srcPath = __dirname + '/app/scripts/';

module.exports = {
    context: srcPath,
    entry: './app.js',
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: [
            bowerFolder,
            'node_modules'
        ]
    }
};