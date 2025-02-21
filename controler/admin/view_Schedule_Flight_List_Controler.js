// viewScheduleFlightListControler.js

const { Flight_Model } = require("../../models/Admin_Model/Flight_Model");

const viewScheduleFlightListControler = async (req, res) => {

    try {

        const flights = await Flight_Model.findAll();
        const flightData = flights.map(flight => flight.toJSON()); // Convert to plain JSON

        console.log("FLIGHTS:", flightData); // ✅ Now it prints actual data

        return res.render('./admin/view_Schedule_Flight_List', { flights: flightData, message: null });

    } 
    catch (error) {
        
        console.log(`Error in viewScheduleFlightListControler API : ${error.message}`);

        res.status(500).render("dashboard", {
            
            message : `Error in viewScheduleFlightListControler API : ${error.message}`
        })
    }
}

exports.viewScheduleFlightListControler = viewScheduleFlightListControler