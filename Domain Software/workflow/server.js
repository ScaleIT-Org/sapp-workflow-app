// Set up
var express  = require('express');
var path = require('path');
var http = require('http');
var app      = express();                               // create our app w/ express
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
 
// Configuration
 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './www'));
app.use(express.static(path.join(__dirname, './www')));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
 
// Routes
app.get('/', function (req, res)
{
	console.log("test")
    res.render('index.html');
});
 
// listen (start app with node server.js) ======================================
var server = http.createServer(app);	//HTTP SERVER
server.listen(app.get('port'), function () {
	    console.log('Express server listening on port ' + app.get('port'));
});

process.on('SIGINT', function() {
  console.log("Terminating ...")
    process.exit();
});