
// ResultsearchPassengerUsingFlight_Number_Router.js


const express = require('express');
const { ResultsearchPassengerUsingFlight_Number_Controler } = require('../../controler/admin/Search_Pssengers_Using_Flight_Number_Controler');

const ResultsearchPassengerUsingFlight_Number_Router = express.Router();

ResultsearchPassengerUsingFlight_Number_Router.post("/result-search-passengerUsing-flight-num", ResultsearchPassengerUsingFlight_Number_Controler);

exports.ResultsearchPassengerUsingFlight_Number_Router = ResultsearchPassengerUsingFlight_Number_Router;