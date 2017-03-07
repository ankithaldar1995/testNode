var http = require('http');
var fs = require('fs');




var server = http.createServer(function(req, res){
	console.log("Request : " + req.url);
	res.writeHead(200, {'Content-Type': 'application/json'});
	var myReadStream = fs.createReadStream(__dirname+'/index.html', 'utf8');
	myReadStream.pipe(res);

});

server.listen(3000, 'localhost');
console.log("Listening to 3000");
