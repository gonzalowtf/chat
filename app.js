//app.js

var port = process.env.PORT || 3000;
var express = require('express'),
    app = express(),
    server =require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(port);


app.get('/',function(req,res){

	res.sendfile(__dirname + '/index.html');
});    

io.sockets.on('connection' ,function(socket){
	socket.on('sendMessenge', function(data){
		io.sockets.emit('newMessenge',{msg:data});
	});
});
