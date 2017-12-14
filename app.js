/**
 * Module dependencies.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var fileUpload = require('express-fileupload');
var example = require('./config/models');

var ip = require('ip');
var port = process.env.PORT || 8088;
var app = express();


// Configuration

app.use(express.static(__dirname + '/public'));
app.use(fileUpload({
    limits: {
        // fileSize: 20 * 500 * 500,
        fieldSize: 1
    },
    // safeFileNames: true,
    // preserveExtension: true
}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());

app.use(methodOverride());






// Routes

// require('./routes/routes.js')(app);
require('./routes/addbookingdetail.js')(app);
var api1 = require('./routes/api1');
app.use('/api1', api1);
















var ipaddress = ip.address();
app.listen(port);

console.log('server in running on', ipaddress + ':' + port);
console.log('The App runs on port ' + port);