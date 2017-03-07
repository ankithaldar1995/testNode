var express = require('express');
var cors = require('cors');

var node = { data : {
    cpu : "100",
    memory : "200",
    disk : "300",
    energy : "400",
    network : "500",
    }
}

var app = express(); //init the expresss function from require
app.use(cors());
app.set('view engine', 'ejs');
app.get('/nodes', function(req, res){

	res.send(node);
});

app.get('/contact', function(req, res){
	console.log(__dirname+'/data.json');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
	res.sendFile(__dirname+'/data.json');

});

app.get('/profile/:name', function(req, res){
	var age = '22';
	res.render('profile', {person : req.params.name, age: age});
});



 app.listen('https://testapiankit.herokuapp.com/');

