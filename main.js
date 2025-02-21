// main.js

require('dotenv').config();
const express = require('express');
const colors = require('colors');
const { dbConnect, sequelize } = require('./config/db');
const bodyParser = require('body-parser');
const { AdminModel } = require('./models/Admin_Model');
const { Custemer_Model } = require('./models/Custemer_Model');
const { Flight_Model } = require('./models/Admin_Model/Flight_Model');
const { Jet_Model } = require('./models/Admin_Model/Jet_Model');
const { loginRouter } = require('./router/login_Router');
const { createAccountRouter } = require('./router/createAccount_Router');
const { addJetRouter } = require('./router/admin/Add_Jet_Router');
const { flightScheduleRouter } = require('./router/admin/flight_Scedule_Router');
const { searchAvailableFlightRouter } = require('./router/custemer/Search_Available_Flight_Router');
const { Ticket_Model } = require('./models/User_Model/Ticket_Model');
const { Passenger_Model } = require('./models/User_Model/Passenger_Model');
const { Payment_Model } = require('./models/User_Model/Payment_Model');
const { passengersFormRouter } = require('./router/custemer/passengers_Form_Router');
const { paymentDetailRouter } = require('./router/custemer/payment_Details_Router');
const { insertPaymentRouter } = require('./router/custemer/insert_Payement_Router');
const { paymentResultRouter } = require('./router/payment_Result_Router');
const { downloadTicketRouter } = require('./router/custemer/download_Ticket_Router');
const { viewTicketDetailsRouter } = require('./router/custemer/ticket_PNR_Search');
const { resultSearchPRN_Router } = require('./router/custemer/result_Search_PRN_Router');
const { viewScheduleFlightListRouter } = require('./router/admin/view_Schedule_Flight_List_Router');
const { searchPassengerUsingFlight_Number_Router } = require('./router/admin/Search_Pssengers_Using_Flight_Number_Router');
const { ResultsearchPassengerUsingFlight_Number_Router } = require('./router/admin/Result_Search_Pssengers_Using_Flight_Number_Router');
const cookieParser = require('cookie-parser');


 require('./Association/Association');

const app = express();
app.set("view engine",'ejs');
app.set("views", 'views');

app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());


app.use(loginRouter);
app.use(createAccountRouter);
app.use(addJetRouter);
app.use(flightScheduleRouter);
app.use(searchAvailableFlightRouter);
app.use(passengersFormRouter);
app.use(paymentDetailRouter);
app.use(insertPaymentRouter);
app.use(paymentResultRouter);
app.use(downloadTicketRouter);
app.use(viewTicketDetailsRouter);
app.use(resultSearchPRN_Router);
app.use(viewScheduleFlightListRouter);
app.use(searchPassengerUsingFlight_Number_Router);
app.use(ResultsearchPassengerUsingFlight_Number_Router)

app.use("/", (req, res) => {

    res.render("home");
})




const PORT = 1212;

(async () => {

    try {

         await AdminModel.sync({ force : false });
        // console.log("AdminModel created".bgBlue);
        
        await Custemer_Model.sync({ force : false });
        // console.log("Custemer_Model created".bgBlue);
 
        await Jet_Model.sync({ force : false });
        // console.log("Jet_Model created".bgBlue);

        await Flight_Model.sync({ force : false });
        //console.log("Flight_Model created".bgBlue);

                
        await Payment_Model.sync({ force : false });
        // console.log("Payment_Model created".bgBlue);

        await Passenger_Model.sync({ force : false });
        // console.log("Passenger_Model created".bgBlue);
        
        
        await Ticket_Model.sync({ force : false });
        // console.log("Ticket_Model created".bgBlue);
        
  

/*          await sequelize.sync({force : true});
         console.log("created All the teables successfully");
 */         
         
 
        // await Passenger_Model.sync({ force : false });
//         console.log("Passenger_Model created".bgBlue);
        
        app.listen(PORT, () => {

            console.log(`Server running on http://localhost:${PORT}`.bgMagenta);
            dbConnect();
        })

    } catch (error) {
        
        console.log(error.message);
    }
}) ();


