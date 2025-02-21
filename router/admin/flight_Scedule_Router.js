 
// flightScheduleRouter.js 
const express = require('express');
const { flightScheduleControler } = require('../../controler/admin/flight_Scedule_Detail_Controler');
const { adminAuthMiddleware } = require('../../middleware/Admin_Auth_Middleware');



const flightScheduleRouter = express.Router();

flightScheduleRouter.get("/add-flight",  (req, res) => {

    res.render('./admin/add-Flight-Schedule');
});

flightScheduleRouter.post('/add-flight-schedule', adminAuthMiddleware, flightScheduleControler);

exports.flightScheduleRouter = flightScheduleRouter;