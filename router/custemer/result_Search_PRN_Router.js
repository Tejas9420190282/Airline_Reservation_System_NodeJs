
// result_Search_PRN_Router.js

const express = require('express');
const { resultSearchPRN_Controler } = require('../../controler/custemer/result_Search_PRN_Controler');

const resultSearchPRN_Router = express.Router();

resultSearchPRN_Router.post("/ticket-prn-search-result", resultSearchPRN_Controler)

exports.resultSearchPRN_Router = resultSearchPRN_Router;




