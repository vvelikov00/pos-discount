const nodemailer = require('nodemailer');
require('dotenv/config')

let transporter = nodemailer.createTransport({
  service: 'gmail',
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASSWORD
	}  
});


const sendRegistrationMail = (user) => {

	let mailOptions = {
		from: process.env.GMAIL_USER,
		to: user.email,
		subject: 'POS Discount Registration',
		html: `<h3>Hello ${user.username}</h3></br>
		<p>Your new account details:</p></br>
		<p>Username: ${user.username}</p></br>
		<p>Password: ${user.password}</p></br>
		<p><b>Please change your password after first login!</b></p>`
	};

	return transporter.sendMail(mailOptions, function(err, data) {
		if(err) {
			return err
		} 
		return
	})
}

module.exports = sendRegistrationMail
