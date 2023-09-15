const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const doctors = require('../schema/Doctor');
const users = require('../schema/User');
const staffmember = require('../schema/Staff');
const {generateOtp} = require('../include/OtpGen');
const {sendMail} = require('../include/NodemailerConfig');
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
		role: 'Doctor',
	});
	doctor.save().then((result) => {
		user.save().then((result) => {
			sendMail(otp, email),
				doctors.find().then((result_1) => {
					res.send(result_1);
				});
		});
	});
});
router.post('/addstaff', async (req, res) => {
	const name = req.body.name;
	const nic = req.body.nic;
	const address = req.body.address;
	const role = req.body.role;
	const email = req.body.email;
	const doctor = new staffmember({
		name: name,
		nic: nic,
		email: email,
		address: address,
		role: role,
	});
	const otp = generateOtp(6);
	const user = new users({
		email: email,
		password: otp,
		role: role,
	});
	doctor.save().then((result) => {
		user.save().then((result) => {
			sendMail(otp, email),
				staffmember.find().then((result_1) => {
					res.send(result_1);
				});
		});
	});
});
router.post('/getstaff', async (req, res) => {
	staffmember.find().then((result) => {
		res.send(result);
	});
});

module.exports = router;
