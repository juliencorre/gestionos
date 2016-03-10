// =======================
// get the packages we need ============
// =======================
var express = 		require('express');
var path = 			require('path');
var cookieParser = 	require('cookie-parser');
var bodyParser = 	require('body-parser');
var jwt    = 		require('jwt-simple'); // used to create, sign, and verify tokens
var morgan      = 	require('morgan');


var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//app.use(logger('dev'));

//use morgan to log requests to the console
app.use(morgan('dev'));

//use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));
app.use('/template', express.static('template'));
app.use('/test', express.static('test'));

// defini l'url de base de l'application client
app.use('/', index);
// defini l'url de base de l'api serveur
app.use('/api/v1/', api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 
var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
 
module.exports = app;