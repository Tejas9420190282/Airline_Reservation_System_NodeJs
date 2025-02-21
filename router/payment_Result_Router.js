


// create_Order_Router.js

const express = require('express');
const { paymentResultControler } = require('../controler/custemer/payment_Result_Controler');


const paymentResultRouter = express.Router();

paymentResultRouter.post("/create-order", paymentResultControler);

exports.paymentResultRouter = paymentResultRouter;





