const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({
	name: String,
	nic: String,
	email: String,
	address: String,
	regno: String,
	speciality: String,
});

const DoctorModel = mongoose.model('doctors', DoctorSchema);
module.exports = DoctorModel;
