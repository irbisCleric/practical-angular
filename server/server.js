/**
 * Created by skok on 26/05/15.
 */
var fs = require("fs"),
    express = require('express'),
    app = express(),
    jsonData,
    comments;

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

// CORS on ExpressJS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/list', function(req, res){
    jsonData = readJsonFileSync(__dirname + '/data/list.json', 'utf-8');

    res.contentType('application/json');
    res.send(jsonData);
});

app.get('/api/list/:user_id', function(req, res){
    jsonData = readJsonFileSync(__dirname + '/data/list.json', 'utf-8');

    jsonData.forEach( function (userObj) {
        if (userObj.user_id === Number(req.params.user_id)) {
            res.contentType('application/json');
            res.send(userObj);
        }
    });

});

app.get('/api/comments/:user_id', function(req, res){
    jsonData = readJsonFileSync(__dirname + '/data/comments.json', 'utf-8');
    comments = [];


    jsonData.forEach( function (commentObj) {
        if (commentObj.user_id === Number(req.params.user_id)) {
            comments.push(commentObj);
        }
    });

    res.contentType('application/json');
    res.send(comments);
});

/*app.get('/', function(req, res){
    jsonData = readJsonFileSync(__dirname + '/data/list.json', 'utf-8');

    res.contentType('application/json');
    res.send(jsonData);
});*/


app.listen(1715);