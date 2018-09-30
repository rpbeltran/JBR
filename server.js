
var express    = require("express");
var bodyParser = require("body-parser");

var app = express();

app.get( '/', function(request,response) {
	
	response.send( "GET received" );

});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post( '/', function(request,response) {

	response.send( request.body );
	console.log(    request.body );

});


app.listen( 8080 );







/*


var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(8080);


function handler (req, res) {

	broadcast();

	res.write( "hello" );
	console.log( req.body );

  	res.end();
}


var clients = [];

io.on('connection', function( socket ) {

	clients.append( socket );

} );


function broadcast () {

	clients.forEach( function(seocket) {
		socket.emit( 'broadcast', "event" );
	});

}
*/



