/**
 * Created by irbis on 24.06.15.
 */
module.exports = {
    context: __dirname + '/app/scripts/',
    entry: './app.js',
    output: {
        path: __dirname + '/app/build/',
        filename: 'bundle.js'
    }
};