const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const pharmacyRoutes = require('./api/pharmacyRoutes');
const adminRoutes = require('./api/adminRoutes');
const cashierRoutes = require('./api/cashierRoutes');
const doctorRoutes = require('./api/doctorRoutes');
//import DoctorModel from './schema/Doctor';
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', pharmacyRoutes);
app.use('/api', adminRoutes);
app.use('/api', cashierRoutes);
app.use('/api', doctorRoutes);
const doctors = require('./schema/Doctor');

const connect = require('./database/conn.js');

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// start server only when we have valid connection
connect()
	.then(() => {
		try {
			app.listen(PORT, () => {
				console.log(`Server connected to http://localhost:${PORT}`);
				// const data = new doctors({
				// 	name: 'String',
				// 	nic: 'String',
				// 	email: 'String',
				// 	address: 'String',
				// 	regno: 'String',
				// 	speciality: 'String',
				// });
				// data.save().then((result) => {
				// 	console.log(result);
				// });
			});
		} catch (error) {
			console.log('Cannot connect to the server');
		}
	})
	.catch((error) => {
		console.log('Invalid database connection..!');
	});
