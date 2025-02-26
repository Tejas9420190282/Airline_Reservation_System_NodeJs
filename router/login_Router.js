
const express = require('express');
const { loginControler } = require('../controler/login_Controler');

const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {

    res.render("login");
})

loginRouter.post("/login-submit", loginControler);

exports.loginRouter = loginRouter;
