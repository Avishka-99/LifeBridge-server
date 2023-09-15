const mongoose = require('mongoose');
const AppoinmentSchema = new mongoose.Schema({
	name: String,
	age: Number,
	date: String,
	doctor: String,
	dname: String,
});

const AppoinmentModel = mongoose.model('appoinments', AppoinmentSchema);
module.exports = AppoinmentModel;
