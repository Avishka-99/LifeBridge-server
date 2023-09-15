const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const doctors = require('../schema/Doctor');
const users = require('../schema/User');
router.post('/signinuser', async (req, res) => {
	const password = req.body.password;
	const email = req.body.email;
	users.findOne({email: email}).then((result) => {
		if (result) {
			if (result.password == password) {
				res.send({type: result.role});
			} else {
				res.send('Password not matched');
			}
		} else {
			res.send('Not a registered user');
		}
	});
	// const doctor = new staffmember({
	// 	name: name,
	// 	nic: nic,
	// 	email: email,
	// 	address: address,
	// 	role: role,
	// });
	// const otp = generateOtp(6);
	// const user = new users({
	// 	email: email,
	// 	password: otp,
	// 	role: 'role',
	// });
	// doctor.save().then((result) => {
	// 	user.save().then((result) => sendMail(otp, email), res.send('success'));
	// });
});
module.exports = router;
