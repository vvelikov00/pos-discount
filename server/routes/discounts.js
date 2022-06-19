const router = require('express').Router();
const sendApprovementMail = require('../mail/sendApprovementMail');
const Discounts = require('../models/appModels/Discounts');
const Merchants = require('../models/appModels/Merchants');


router.post('/addDiscount', async(req, res) => {
    const discount = await Discounts.create(req.body)

    res.send(discount)
});

router.get('/getMyDiscounts/:id', async(req, res) => {
    try {
        const discounts = await Discounts.findAll({where: {merchantid: req.params.id}, include: [{all: true, nested: true, attributes: {exclude: ["password"]}}]})
        res.send(discounts)
    } catch (error) {
        res.send(error)
    }
    
})

router.get('/getAllDiscounts', async(req, res) => {
    try {
        const discounts = await Discounts.findAll({include: [{all: true, nested: true, attributes: {exclude: ["password"]}}]})
        res.send(discounts)
    } catch (error) {
        res.send(error)
    }
})

router.post('/approve', async(req, res) => {
  const discount = await Discounts.findByPk(req.body.id, {include: [{all: true, nested: true, attributes: {exclude: ["password"]}}]})  
  const email = {
    id: req.body.id,
    username: req.body.username,
    email: req.body.email
  }

  if(discount.approved === 1){
    discount.approved = 2
    discount.status = 'Active'
    discount.second = req.body.userId
    if (req.body.subscription) {
      sendApprovementMail(email)  
    }
  } else {
    discount.approved = 1,
    discount.first = req.body.userId
  }
  await discount.save()
  res.send(discount)
})

module.exports = router;