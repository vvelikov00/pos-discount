const nodemailer = require('nodemailer');
require('dotenv/config')

let transporter = nodemailer.createTransport({
  service: 'gmail',
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASSWORD
	}  
});


const sendApprovementMail = (email) => {
	console.log(email)

	let mailOptions = {
		from: process.env.GMAIL_USER,
		to: email.email,
		subject: 'POS Discount Approvement',
		html: `<h3>Hello, ${email.username}</h3></br>
		<p>Your discount with id: ${email.id} was approved!</p>`
	};

	return transporter.sendMail(mailOptions, function(err, data) {
		if(err) {
			return err
		} 
		return
	})
}

module.exports = sendApprovementMail
