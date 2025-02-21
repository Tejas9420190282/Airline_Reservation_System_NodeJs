// login_Router.js

const express = require('express');
const { loginControler } = require('../controler/login_Controler');
const { adminAuthMiddleware } = require('../middleware/Admin_Auth_Middleware');
const { customerAuthMiddleware } = require('../middleware/Custemer_Aut_Middleware');

const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {

    res.render("login");
})

loginRouter.post("/login-submit", loginControler);

// protecting admin
loginRouter.get("/login-home", adminAuthMiddleware, (req, res) => {

    res.render("./admin/admin-home");
})

// protecting custemer

loginRouter.get("/custemer-home", customerAuthMiddleware, (req, res) => {
    res.render("./custemer/custemer-home", { userName: req.custemer.email });
});

loginRouter.get('/logout', (req, res) => {

    res.clearCookie("token", { path: "/" }); // Remove the JWT token from the browser
    return res.redirect("/login");   // Redirect the user to the login page
})


exports.loginRouter = loginRouter;
