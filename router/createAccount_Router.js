
const express = require('express');
const { createAccountControler } = require('../controler/createAccount_Controler');


const createAccountRouter = express.Router();

createAccountRouter.get("/create-account", (req, res) => {
    res.render('create_Account');
})

createAccountRouter.post("/create-account-submit", createAccountControler);

exports.createAccountRouter = createAccountRouter;