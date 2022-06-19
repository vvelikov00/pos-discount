const router = require('express').Router();
const bcrypt = require('bcryptjs');
const registerValidation = require('../validation/registration');
const loginValidation = require('../validation/login');
const Cardholders = require('../models/appModels/Cardholders');

router.post('/register', async(req, res) => {
	const {error} = registerValidation(req.body)
	if(error) return res.status(400).send(error.details[0].message)

	const usernameExists = await Cardholders.findOne({where: {username: req.body.username}})
	if(usernameExists) return res.status(400).send('Username is already in use!')

	const emailExists = await Cardholders.findOne({where: {email: req.body.email}})
	if (emailExists) return res.status(400).send('Email already exists!')


	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt)


	const cardholder = await Cardholders.create({...req.body, password: hashedPassword})

	res.send(cardholder)
});

router.post('/login', async(req, res) => {
	const {error} = loginValidation(req.body)
	if(error) return res.status(400).send(error.details[0].message)

	const userCheck = await Cardholders.findOne({where: {username: req.body.username}});
	console.log(userCheck)
	if(!userCheck) return res.status(400).send('User is not found!');

	const validPass = await bcrypt.compare(req.body.password, userCheck.password);
	if(!validPass) return res.status(400).send('Wrong password!')

	const user= await Cardholders.findOne({where: {username: req.body.username}, attributes: {exclude: ['password']}});

	res.send(user)
})

router.post('/updateSubscription', async(req, res) => {
	const user = await Cardholders.findByPk(req.body.id)
	user.subscription = !user.subscription
	await user.save()
	res.send(user)
})

module.exports = router;
