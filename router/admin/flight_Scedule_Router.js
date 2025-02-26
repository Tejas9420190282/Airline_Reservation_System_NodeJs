
const express = require('express');
const { flightScheduleControler } = require('../../controler/admin/flight_Scedule_Detail_Controler');


const flightScheduleRouter = express.Router();

flightScheduleRouter.get("/add-flight", (req, res) => {

    res.render('./admin/add-Flight-Schedule');
});

flightScheduleRouter.post('/add-flight-schedule', flightScheduleControler);

exports.flightScheduleRouter = flightScheduleRouter;