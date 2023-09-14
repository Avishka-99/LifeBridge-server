const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const doctors = require('../schema/Doctor');
const users = require('../schema/User');
const staffmember = require('../schema/Staff');
router.post('/adddoctor', async (req, res) => {
	const name = req.body.name;
	const nic = req.body.nic;
	const address = req.body.address;
	const regno = req.body.regno;
	const email = req.body.email;
	const speciality = req.body.speciality;
	const doctor = new doctors({
		name: name,
		nic: nic,
		email: email,
		address: address,
		regno: regno,
		speciality: speciality,
	});
	const otp = generateOtp(6);
	const user = new users({
		email: email,
		password: otp,
	});
	doctor.save().then((result) => {
		user.save().then((result) => sendMail(otp, email), res.send('success'));
	});
});
router.post('/getdoctors', async (req, res) => {
	doctors.find().then((result) => {
		res.send(result);
	});
	// const name = req.body.name;
	// const nic = req.body.nic;
	// const address = req.body.address;
	// const regno = req.body.regno;
	// const email = req.body.email;
	// const speciality = req.body.speciality;
	// const doctor = new doctors({
	// 	name: name,
	// 	nic: nic,
	// 	email: email,
	// 	address: address,
	// 	regno: regno,
	// 	speciality: speciality,
	// });
	// const otp = generateOtp(6);
	// const user = new users({
	// 	email: email,
	// 	password: otp,
	// });
	// doctor.save().then((result) => {
	// 	user.save().then((result) => sendMail(otp, email), res.send('success'));
	// });
});
module.exports = router;
