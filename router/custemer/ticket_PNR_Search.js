// ticket_PNR_Search.js

const express = require('express');

const viewTicketDetailsRouter = express.Router();

viewTicketDetailsRouter.get("/show-ticket-prn-search", (req, res) => {
    res.render("./custemer/ticket_PNR_Search");
})

exports.viewTicketDetailsRouter = viewTicketDetailsRouter;




