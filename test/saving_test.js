const assert = require('assert');
const mocha = require('mocha');

const MarioChar = require('../models/mariochar');

//Describe test
describe('saving records', function(){
	//create test case
	it('save a record to db', function(done){
		
		var char = new MarioChar({
			name : 'Mario'
		});

		//asyn req, interface a promise method
		char.save().then(function(){
			//true when created locally but not saved to DB
			assert(char.isNew === false);
			done();
		});
		
	});
});