
const express = require('express');
const { insertPaymentController } = require('../../controler/custemer/insert_Payement_Controler');


const insertPaymentRouter = express.Router();

insertPaymentRouter.post('/insert-payment', insertPaymentController);

exports.insertPaymentRouter = insertPaymentRouter;