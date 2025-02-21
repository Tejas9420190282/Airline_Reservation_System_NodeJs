const { Passenger_Model } = require("../../models/User_Model/Passenger_Model");
const { Ticket_Model } = require("../../models/User_Model/Ticket_Model");

const resultSearchPRN_Controler = async (req, res) => {
    try {
        const { pnr } = req.body;

        console.log(`PNR:`, pnr);

        if (!pnr) {
            return res.render("dashboard", { message: "Please submit PNR" });
        }

        const ticket = await Ticket_Model.findOne({ where: { pnr } });

        if (!ticket) {
            return res.render("dashboard", { message: "Ticket not found" });
        }

        const passengers = await Passenger_Model.findAll({ where: { pnr } });

        if (!passengers || passengers.length === 0) {
            return res.render("dashboard", { message: "No passengers found for this ticket" });
        }

        const ticketDetails = passengers.map(passenger => ({
            flight_no: ticket.flight_no,
            journey_date: ticket.journey_date,
            class: ticket.class,
            booking_status: ticket.booking_status,
            lounge_access: ticket.lounge_access,
            insurance: ticket.insurance,
            priority_checkin: ticket.priority_checkin,
            passenger_name: passenger.name,
            passenger_age: passenger.age,
            passenger_gender: passenger.gender,
            meal_choice: passenger.meal_choice
        }));

         res.render("./custemer/result_Search_PRN", { ticketDetails, message: null });

    } catch (error) {
        console.error(`Error in resultSearchPRN_Controler API: ${error.message}`);
        return res.render("dashboard", { message: `Error: ${error.message}` });
    }
};

exports.resultSearchPRN_Controler = resultSearchPRN_Controler;
