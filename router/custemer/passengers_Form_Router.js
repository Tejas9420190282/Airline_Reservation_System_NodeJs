// passenger_Form_Router.js

const express = require("express");
const { passengersFormControler } = require("../../controler/custemer/passengers_Form_Controler");

const passengersFormRouter = express.Router();

passengersFormRouter.post("/selected-available-flight", (req, res) => {
    const {
        passengers,
        selectedFlight,
        sit_class,
        flight_no,
        departure_date,
        origin,
        destination,
    } = req.body;
    // Ensure passengers is an integer
    res.render("./custemer/passengers_Form", {
        passengers /* : parseInt(passengers, 10) */, // Convert to integer
        selectedFlight: selectedFlight,
        sit_class,
        flight_no,
        departure_date: departure_date,
        origin,
        destination,
    });
});

passengersFormRouter.post(
    "/submit-passengers-details",
    passengersFormControler
);

exports.passengersFormRouter = passengersFormRouter;
