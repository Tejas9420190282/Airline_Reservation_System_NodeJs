const { Flight_Model } = require("../../models/Admin_Model/Flight_Model");
const { Passenger_Model } = require("../../models/User_Model/Passenger_Model");
const { Payment_Model } = require("../../models/User_Model/Payment_Model");
const { Ticket_Model } = require("../../models/User_Model/Ticket_Model");

const { generateBoardingPass } = require("./Ticket_Generator");

const downloadTicketControler = async (req, res) => {
    try {
        const pnr = req.params.pnr;
        const paymentId = req.query.paymentId;

        // Fetch ticket, passengers, and flight details
        const ticket = await Ticket_Model.findOne({ where: { pnr } });
        const passengers = await Passenger_Model.findAll({ where: { pnr } });
        const flight = await Flight_Model.findOne({ where: { flight_no: ticket.flight_no } });
        

        // Parse departure_date into a Date object
        const departureDate = new Date(flight.departure_date);

        // Check if departureDate is valid
        if (isNaN(departureDate.getTime())) {
            throw new Error("Invalid departure date format");
        }

        // Prepare data for the PDF
        const userData = {
            flightNumber: flight.flight_no,
            departure: flight.from_city,
            destination: flight.to_city,
            date: departureDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
            passengers: passengers.map(p => ({
                name: p.name,
                age: p.age,
                gender: p.gender,
            })),
            paymentId,
        };

        // Generate the PDF
        const pdfBytes = await generateBoardingPass(userData);  

        // Set response headers for PDF download
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename="ticket_${pnr}.pdf"`);

        // Send the PDF as a response
        res.end(pdfBytes);
    } catch (error) {
        console.log(`Error in downloadTicketControler API: ${error.message}`);
        res.status(500).send(`Error generating ticket: ${error.message}`);
    }
};

exports.downloadTicketControler = downloadTicketControler;