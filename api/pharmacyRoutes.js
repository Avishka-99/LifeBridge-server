const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
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
	});
	doctor.save().then((result) => {
		user.save().then((result) => sendMail(otp, email), res.send('success'));
	});
});
module.exports = router;
