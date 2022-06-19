const router = require('express').Router();
const bcrypt = require('bcryptjs');
const BankEmployees = require('../models/dwhModels/bankEmployees')
const BankEmployeesApp = require('../models/appModels/bankEmployees')
const registerValidation = require('../validation/bankEmployeesRegister')
const loginValidation = require('../validation/login')

router.post('/register', async(req, res) => {
	const {error} = registerValidation(req.body)
	if(error) return res.status(400).send(error.details[0].message)

	const usernameExists = await BankEmployees.findOne({where: {username: req.body.username}})
	if(usernameExists) return res.status(400).send('Username is already in use!')

	const emailExists = await BankEmployees.findOne({where: {email: req.body.email}})
	if (emailExists) return res.status(400).send('Email already exists!')


	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt)


	const bankEmployee = await BankEmployees.create({...req.body, password: hashedPassword})
  const bankEmployeeApp = await BankEmployeesApp.create({...req.body, password: hashedPassword})

	res.send(bankEmployee)
});

router.post('/login', async(req, res) => {
	const {error} = loginValidation(req.body)
	if(error) return res.status(400).send(error.details[0].message)

	const userCheck = await BankEmployees.findOne({where: {username: req.body.username}});
	console.log(userCheck)
	if(!userCheck) return res.status(400).send('User is not found!');

	const validPass = await bcrypt.compare(req.body.password, userCheck.password);
	if(!validPass) return res.status(400).send('Wrong password!')

	const user= await BankEmployees.findOne({where: {username: req.body.username}, attributes: {exclude: ['password']}});

	res.send(user)
})

// router.post('/updateSubscription', async(req, res) => {
// 	const user = await Cardholders.findByPk(req.body.id)
// 	user.subscription = !user.subscription
// 	await user.save()
// 	res.send(user)
// })

module.exports = router;
