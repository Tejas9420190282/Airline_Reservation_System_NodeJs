// add_Flight.js

const express = require('express');
const { addJetControler } = require('../../controler/admin/Add_Jet_Controler');
const { adminAuthMiddleware } = require('../../middleware/Admin_Auth_Middleware');


const addJetRouter = express.Router();

addJetRouter.get("/add-aircraft-details", adminAuthMiddleware, (req, res) => {

    res.render('./admin/add_Aircraft_Details');
});
addJetRouter.post("/submit-jet-details", adminAuthMiddleware, addJetControler);

exports.addJetRouter = addJetRouter;
