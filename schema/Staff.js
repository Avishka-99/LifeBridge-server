const mongoose = require('mongoose');
const StaffSchema = new mongoose.Schema({
	name: String,
	nic: String,
	email: String,
	address: String,
	role: String,
});

const StaffModel = mongoose.model('staff', StaffSchema);
module.exports = StaffModel;
