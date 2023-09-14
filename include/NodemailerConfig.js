var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
		user: 'lifebridgehospitals@gmail.com',
		pass: 'utuppivwpkkdfwew',
	},
	tls: {
		rejectUnauthorized: false,
	},
	secure: false,
});
exports.sendMail = (otp, email) => {
	var mailOptions = {
		from: 'lifebridgehospitals@gmail.com',
		to: email,
		subject: 'This is your password for LIFE BRIDGE HOSPITALS',
		text: otp,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			return error;
		} else {
			return 'Email sent: ' + info.response;
		}
	});
};
