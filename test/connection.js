const mongoose = require('mongoose');

//connect to db
mongoose.connect("mongodb://localhost/test");

//event like jQuery (on) here its once, to listen to it once
////error is the event
mongoose.connection.once('open', function(){
	console.log("Connection Made");
}).on('error', function(error){ 
	console.log("Connection error : ",error);
});

