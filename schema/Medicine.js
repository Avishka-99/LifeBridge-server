const mongoose = require('mongoose');
const Medicine = new mongoose.Schema({
	name: String,
	qty: Number,
	price: Number,
});

const MedicineModel = mongoose.model('medicine', Medicine);
module.exports = MedicineModel;
