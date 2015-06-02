/**
 * Created by skok on 26/05/15.
 */
var fs = require("fs"),
    express = require('express'),
    app = express(),
    jsonData;

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

app.get('/', function(req, res){
    jsonData = readJsonFileSync(__dirname + '/data/list.json', 'utf-8');

    res.contentType('application/json');
    res.send(jsonData);
});

app.get('/api/list', function(req, res){
    jsonData = readJsonFileSync(__dirname + '/data/list.json', 'utf-8');

    res.contentType('application/json');
    res.send(jsonData);
});

app.get('/api/item', function(req, res){
    jsonData = readJsonFileSync(__dirname + '/data/item.json', 'utf-8');

    res.contentType('application/json');
    res.send(jsonData);
});


app.listen(1715);