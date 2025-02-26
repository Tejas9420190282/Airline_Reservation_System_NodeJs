
const express = require('express');

const searchPassengerUsingFlight_Number_Router = express.Router();

searchPassengerUsingFlight_Number_Router.get("/view-tickets", (req, res) => {

    res.render('./admin/searchPassengerUsingFlight_Number')
});

exports.searchPassengerUsingFlight_Number_Router = searchPassengerUsingFlight_Number_Router;