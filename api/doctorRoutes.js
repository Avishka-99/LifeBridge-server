const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const appoinment = require('../schema/Appoinment');
const prescriptions = require('../schema/Presription');
router.post('/getmyappoinments', async (req, res) => {
	const date = req.body.date;
	const id = req.body.id;
	appoinment.find({date: date, id: 'id'}).then((result, err) => {
		if (err) {
			res.send('nodata');
		} else {
			res.send(result);
		}
	});
	console.log(id);
});
router.post('/setprescription', async (req, res) => {
	const id = req.body.id;
	const prescription = req.body.data;
	console.log(prescription);
	const data = new prescriptions({
		medicines: prescription,
	});
	data.save().then((result) => {
		res.send('success');
	});
	//res.send('success');
});
module.exports = router;
