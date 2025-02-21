// download_Ticket_Router.js

const express = require('express');
const { downloadTicketControler } = require('../../controler/custemer/download_Ticket_Controler');

const downloadTicketRouter = express.Router();

downloadTicketRouter.get("/download-ticket/:pnr", downloadTicketControler);

exports.downloadTicketRouter = downloadTicketRouter;







