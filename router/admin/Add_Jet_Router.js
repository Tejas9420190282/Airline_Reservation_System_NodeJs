

const express = require('express');
const { addJetControler } = require('../../controler/admin/Add_Jet_Controler');


const addJetRouter = express.Router();

addJetRouter.get("/add-aircraft-details", (req, res) => {

    res.render('./admin/add_Aircraft_Details');
});
addJetRouter.post("/submit-jet-details", addJetControler);

exports.addJetRouter = addJetRouter;
