const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Merchants = require('../models/appModels/Merchants')
const MerchantsDWH = require('../models/dwhModels/Merchants')
const loginValidation = require('../validation/login')
const merchantsValidation = require('../validation/merchantsContinue')



router.post('/login', async(req, res) => {
	const {error} = loginValidation(req.body)
	if(error) return res.status(400).send(error.details[0].message)

	const userCheck = await Merchants.findOne({where: {username: req.body.username}});
	console.log(userCheck)
	if(!userCheck) return res.status(400).send('User is not found!');

	const validPass = await bcrypt.compare(req.body.password, userCheck.password);
	if(!validPass) return res.status(400).send('Wrong password!')

	const user= await Merchants.findOne({where: {username: req.body.username}, attributes: {exclude: ['password']}});

	res.send(user)
})

router.post('/continue', async(req, res) => {
	const validation = {
		password: req.body.password,
		phone: req.body.phone
	}
	const {error} = merchantsValidation(validation)
	if(error) return res.status(400).send(error.details[0].message)

	
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt)

	const user = await Merchants.findOne({where: {username: req.body.username}})

	user.password = hashedPassword
	user.phone = req.body.phone
	user.firstTime = false
	await user.save()

	const userDwh = await MerchantsDWH.findOne({where: {username: req.body.username}})



	userDwh.password = hashedPassword
	userDwh.phone = req.body.phone
	userDwh.firstTime = false

	await userDwh.save()

	const userResp = await Merchants.findOne({where: {username: req.body.username}, attributes: {exclude: ['password']}})

	res.send(userResp)

	await user.save
	
})

router.post('/updateSubscription', async(req, res) => {
	const user = await Merchants.findByPk(req.body.id)
	user.subscription = !user.subscription
	await user.save()
	const userDwh = await MerchantsDWH.findByPk(req.body.id)
	userDwh.subscription = !userDwh.subscription
	await userDwh.save()
	res.send(user)
})

router.get('/getAllMerchants', async(req, res) => {
	const merchants = await Merchants.findAll()

	res.send(merchants)
})


module.exports = router;
