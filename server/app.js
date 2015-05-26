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

app.get('/', function(req, res){
    jsonData = readJsonFileSync(__dirname + '/data/data_example.json', 'utf-8');

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