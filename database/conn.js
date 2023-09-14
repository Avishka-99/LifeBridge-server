const mongoose = require('mongoose');

async function connect() {
	const mongodbURL = process.env.MONGODB_URL;

	mongoose.set('strictQuery', true);
	const db = await mongoose.connect(mongodbURL);
	console.log('Database Connected');
	return db;
}
module.exports = connect;
// modules.exp connect;
