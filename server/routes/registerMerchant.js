const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Merchants = require('../models/dwhModels/Merchants')
const MerchantsApp = require('../models/appModels/Merchants')
const registerValidation = require('../validation/merchantsRegister')
const sendRegistrationMail = require('../mail/sendRegistrationMail')


router.post('/', async(req, res) => {
	const {error} = registerValidation(req.body)
	if(error) return res.status(400).send(error.details[0].message)

	const usernameExists = await Merchants.findOne({where: {username: req.body.username}})
	if(usernameExists) return res.status(400).send('Username is already in use!')

	const emailExists = await Merchants.findOne({where: {email: req.body.email}})
	if (emailExists) return res.status(400).send('Email already exists!')

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt)

    sendRegistrationMail(req.body)

	const merchant = await Merchants.create({...req.body, password: hashedPassword})
    const appMerchant = await MerchantsApp.create({...req.body, password: hashedPassword})

	res.send(merchant)
});

module.exports = router;
