// search_Available_Flight_Router.js

const express = require('express');
const { searchAvailableFlightControler } = require('../../controler/custemer/Search_Available_Flight_Contoler');

const searchAvailableFlightRouter = express.Router();

searchAvailableFlightRouter.get("/book-now", (req, res) => {

    res.render('./custemer/search-Available-Flight');
})

searchAvailableFlightRouter.post('/search-flights-submit', searchAvailableFlightControler);

exports.searchAvailableFlightRouter = searchAvailableFlightRouter;




