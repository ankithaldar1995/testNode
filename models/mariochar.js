const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//types and model creation
//weight can also be blank,
const MarioCharSchema = new Schema({
	name : String,
	weight : Number
});

//will create in collection named mariochar based on schema MarioCharSchema
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

//exporting this to use in other files in project
module.exports = MarioChar;

