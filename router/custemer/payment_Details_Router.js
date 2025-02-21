
// payment_Details_Router.js

const express = require('express');
const { paymentDetailControler } = require('../../controler/custemer/payment_Detail_Controler');

const paymentDetailRouter = express.Router();

paymentDetailRouter.get("/payment-details/:pnr", paymentDetailControler)

exports.paymentDetailRouter = paymentDetailRouter;