
var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(8080);


function handler (req, res) {

	broadcast();

	res.write('Hello World!');
	console.log( "hello world" );

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