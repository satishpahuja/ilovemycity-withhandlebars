var express = require('express');
var exphbs=require('express-handlebars');
var routes = require('./routes/route.js');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({defaultLayout:'main'}));

app.get('/', routes.renderHome);

app.get('/:city', routes.renderCity);

var port = process.env.PORT || 8080;

var server = app.listen(port, function (req, res) {
    console.log("Server started at port " + port);
    routes.fillCitiesHashMap();
});
