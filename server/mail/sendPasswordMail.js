const nodemailer = require('nodemailer');
require('dotenv/config')

let transporter = nodemailer.createTransport({
  service: 'gmail',
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASSWORD
	}  
});


const sendPasswordMail = (email) => {
	console.log(email)

	let mailOptions = {
		from: process.env.GMAIL_USER,
		to: email.email,
		subject: 'POS Discount Reset',
		html: `<h3>Hello, ${email.username}</h3></br>
		<p>Here is your password reset token: ${email.id} </p>`
	};

	return transporter.sendMail(mailOptions, function(err, data) {
		if(err) {
			return err
		} 
		return
	})
}

module.exports = sendPasswordMail
