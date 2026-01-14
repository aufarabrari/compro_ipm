const nodemailer = require("nodemailer");
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: SMTP_PORT,
	secure: true,
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS,
	},
	tls: {
		rejectUnauthorized: true,
	},
});

module.exports = transporter;
