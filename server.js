    'use strict';
var express = require('express'),
    include = require('./api/include-files'),
    app = express();
app.use(express.static('./app'));

//include files
include({
    app: app,
    folder: [ 'route', 'controllers', 'models']
});
// main route
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/app/main.html');
});
//start server
app.listen(3000);
