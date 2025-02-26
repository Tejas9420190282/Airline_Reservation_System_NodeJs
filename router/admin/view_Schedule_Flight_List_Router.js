
const express = require('express');
const { viewScheduleFlightListControler } = require('../../controler/admin/view_Schedule_Flight_List_Controler');

const viewScheduleFlightListRouter = express.Router();

viewScheduleFlightListRouter.get("/view-schedule-flight", viewScheduleFlightListControler);

exports.viewScheduleFlightListRouter = viewScheduleFlightListRouter;