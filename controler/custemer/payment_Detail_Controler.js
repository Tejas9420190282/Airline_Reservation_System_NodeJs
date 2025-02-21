
// payment_Detail_Controler.js

const { Flight_Model } = require("../../models/Admin_Model/Flight_Model");
const { Passenger_Model } = require("../../models/User_Model/Passenger_Model");
const { Ticket_Model } = require("../../models/User_Model/Ticket_Model");

const paymentDetailControler = async (req, res) => {

    try {

        const pnr = req.params.pnr;
        
        const ticket = await Ticket_Model.findOne({ where: { pnr } });
        const passengers = await Passenger_Model.findAll({ where: { pnr } });
        const flight = await Flight_Model.findOne({ where: { flight_no: ticket.flight_no } });

        const mealComboCharge = passengers.some(p => p.meal_choice.toLowerCase() === 'yes') ? 500 : 0;

        // Convert to lowercase and compare
        const priorityCheckinFee = ticket.priority_checkin.toLowerCase() === 'yes' ? 400 : 0;
        const insuranceFee = ticket.insurance.toLowerCase() === 'yes' ? 200 : 0;

        const totalBaseFare = ticket.no_of_passengers * flight.price_economy;

        const total = totalBaseFare + mealComboCharge + priorityCheckinFee + insuranceFee;

console.log("Ticket Details:", {
    pnr: ticket.pnr,
    priority_checkin: ticket.priority_checkin,
    insurance: ticket.insurance,
    no_of_passengers: ticket.no_of_passengers
});

        res.render("./custemer/payment_Details", {

            pnr,
            baseFare: flight.price_economy,
            mealComboCharge,
            priorityCheckinFee,
            insuranceFee,
            total,
            key : process.env.RAZORPAY_KEY_ID
        })
        
    } catch (error) {
        
        console.log(
            `Error in paymentDetailControler API ${error.message}`.bgRed
        );

        res.send(500).render("dashboard", {
            message: `Error in paymentDetailControler API ${error.message}`,
        });        
    }
}

exports.paymentDetailControler = paymentDetailControler;




