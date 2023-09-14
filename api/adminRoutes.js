const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
router.post('/adddoctor', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	res.send('success');
});
//const connection = require('../database/conn');

// mongoose.connect('mongodb://localhost:27017/usersdb', {
// 	useNewUrlParser: true,
// 	useFindAndModify: false,
// 	useUnifiedTopology: true,
// });
module.exports = router;
