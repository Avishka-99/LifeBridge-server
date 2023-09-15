const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const doctors = require('../schema/Doctor');
const users = require('../schema/User');
const appoinment = require('../schema/Appoinment');
const staffmember = require('../schema/Staff');
router.post('/addappoinment', async (req, res) => {
	const name = req.body.name;
	const age = req.body.age;
	const date = req.body.date;
	const doctor = req.body.doctor;
	doctors.findById(doctor).then((result) => {
		console.log(result);
		const doctor_name = result.name;
		const appoinments = new appoinment({
			name: name,
			age: age,
			date: date,
			doctor: doctor,
			dname: result.name,
			presription: '',
		});
		appoinments.save().then((result) => {
			appoinment.find().then((result) => {
				res.send(result);
			});
			//res.send('success');
		});
	});

	// const appoinments = new appoinment({
	// 	name: name,
	// 	age: age,
	// 	date: date,
	// 	doctor: doctor,
	// });
	//res.send('success');
	// appoinments.save().then((result) => {
	// 	res.send('success');
	// });
});
router.post('/getdoctors', async (req, res) => {
	doctors.find().then((result) => {
		res.send(result);
	});
});
router.post('/getallappoinments', async (req, res) => {
	appoinment.find().then((result) => {
		res.send(result);
	});
});
module.exports = router;
