const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const medicines = require('../schema/Medicine');
router.post('/addmedicine', async (req, res) => {
	const name = req.body.name;
	const qty = req.body.qty;
	const price = req.body.price;
	//console.log(prescription);
	const data = new medicines({
		name: name,
		qty: qty,
		price: price,
	});
	data.save().then((result) => {
		medicines.find().then((result) => res.send(result));
		//res.send('success');
	});
	//res.send('success');
});
router.post('/getmedicine', async (req, res) => {
	medicines.find().then((result) => {
		res.send(result);
	});
});
// router.post('/addstaff', async (req, res) => {
// 	const name = req.body.name;
// 	const nic = req.body.nic;
// 	const address = req.body.address;
// 	const role = req.body.role;
// 	const email = req.body.email;
// 	const doctor = new staffmember({
// 		name: name,
// 		nic: nic,
// 		email: email,
// 		address: address,
// 		role: role,
// 	});
// 	const otp = generateOtp(6);
// 	const user = new users({
// 		email: email,
// 		password: otp,
// 	});
// 	doctor.save().then((result) => {
// 		user.save().then((result) => sendMail(otp, email), res.send('success'));
// 	});
// });
module.exports = router;
