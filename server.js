var express = require('express'),
    app = express();
app
    .use(express.static('./app'))
    .get('*', function (req, res) {
        res.sendfile('./app/main.html');
    })
    .listen(3000);
