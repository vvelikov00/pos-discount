const router = require('express').Router();
const bcrypt = require('bcryptjs');
const sendApprovementMail = require('../mail/sendApprovementMail');
const sendPasswordMail = require('../mail/sendPasswordMail');
const Cardholders = require('../models/appModels/Cardholders');
const Merchants = require('../models/appModels/Merchants');

function generateToken() {
	let result           = '';
	let chars = [
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		'abcdefghijklmnopqrstuvwxyz',
		'0123456789',
		'!@#$%&*^()'
	]
	for ( let i = 0; i < 10; i++ ) {
		const num = Math.floor(Math.random()*4)
		result += chars[num].charAt(Math.floor(Math.random() * 
		chars[num].length));
	}
	return result
}

router.post('/', async(req, res) => {

	let user;
	user = await Cardholders.findOne({where: {email: req.body.email}})
  if(!user) user = await Merchants.findOne({where: {email: req.body.email}})

	if(!user) return res.status(400).send('User not found!')

	user.token = generateToken();

	const mail = {
		username: user.username,
		email: user.email,
		id: user.token,
	}
	
	sendPasswordMail(mail)
	

	await user.save()

	res.send(user)
});

router.post('/reset', async(req, res) => {

	let user;
	user = await Cardholders.findOne({where: {token: req.body.token}})
  if(!user) user = await Merchants.findOne({where: {email: req.body.token}})

	if(!user) return res.status(400).send('User not found!')
	user.token = null;

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt)
	user.password = hashedPassword
	

	await user.save()

	res.send(user)
});


module.exports = router;
