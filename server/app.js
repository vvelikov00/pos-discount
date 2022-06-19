const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config')


const app = express();

const port = process.env.PORT || 8080;

const cardholdersRoute = require('./routes/cardholders');
const merchantsRoute = require('./routes/merchants');
const bankEmployeesRoute = require('./routes/bankEmployees');
const merchantRegistationRoute = require('./routes/registerMerchant');
const discountsRoute = require('./routes/discounts');
const forgottenPassowrdRoute = require('./routes/forgottenPassword');


app.use(cors());

app.use(bodyParser.json());

app.use('/cardholders', cardholdersRoute);
app.use('/merchants', merchantsRoute);
app.use('/bank', bankEmployeesRoute);
app.use('/registerMerchant', merchantRegistationRoute);
app.use('/discounts', discountsRoute);
app.use('/forgottenPassword', forgottenPassowrdRoute);


app.get('/', (req, res) => {
    res.send('Index')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})