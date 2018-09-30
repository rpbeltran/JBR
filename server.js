
var express    = require("express");
var bodyParser = require("body-parser");

var app = express();


var ins  = 0;
var outs = 0;

app.get( '/', function(request,response) {
	
	response.send( "GET received" );



});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post( '/', function(request,response) {

	if( request.body.is_enter == "true" || request.body.is_enter == "True" ) {
		ins += 1;
	}

	else {
		outs += 1;
	}

	response.send( { ins: ins, outs: outs } );
	console.log  ( { ins: ins, outs: outs } );

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


var clients = {};

var c = 0;

io.on('connection', function( socket ) {

	clients["client_"+c] = socket;

} );


function broadcast () {

	clients.forEach( function(id, socket) {
		socket.emit( 'broadcast', "event" );
	});

}
*/



