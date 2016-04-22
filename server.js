var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var env = app.settings.env;
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');




// gets route for index page
// asterisk will match all route, delivers index page whenever client ask for request that don't exist
app.get('*', function(req, res) {
    res.render('index');
});

// tells app to listen for requests
var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
