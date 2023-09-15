const mongoose = require('mongoose');
const PrescriptionSchema = new mongoose.Schema({
	medicines: String,
});

const PrescriptionModel = mongoose.model('prescriptions', PrescriptionSchema);
module.exports = PrescriptionModel;
