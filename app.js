var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 1337))
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser());

// define routes
app.use(require('./routes'));

// start the server
app.listen(app.get('port'), function (){
	console.log('Webserver ready on port ' + app.get('port'));
});