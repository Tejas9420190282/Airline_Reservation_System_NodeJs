// ResultsearchPassengerUsingFlight_Number_Controler.js

const { Passenger_Model } = require("../../models/User_Model/Passenger_Model");
const { Ticket_Model } = require("../../models/User_Model/Ticket_Model");

const ResultsearchPassengerUsingFlight_Number_Controler = async (req, res) => {
    try {
        const { flightNumber } = req.body; // Get flight_no from query parameters

        console.log(`Flight Number : ${flightNumber}`);

        if (!flightNumber) {
            return res.status(400).render("dashboard", {
                message: "Please provide a flight number to search.",
            });
        }

        const passengers = await Passenger_Model.findAll({
            include: [
                {
                    model: Ticket_Model,
                    attributes: [
                        "flight_no",
                        "class",
                        "journey_date",
                        "lounge_access",
                        "priority_checkin",
                        "insurance",
                    ],
                    where: { flight_no: flightNumber },// Filter passengers by flight_no
                },
            ],
        });

        console.log(`PASSENGERS DATA:`, passengers);

        return res.render("./admin/Result_view_Pssengers_Using_Flight_Number", {
            passengers,
            message: null,
        });
    } catch (error) {
        console.log(
            `Error in searchPassengerUsingFlight_Number_Controler API : ${error.message}`
        );

        res.status(400).render("dashboard", {
            message: `Error in searchPassengerUsingFlight_Number_Controler API : ${error.message}`,
        });
    }
};

exports.ResultsearchPassengerUsingFlight_Number_Controler =
    ResultsearchPassengerUsingFlight_Number_Controler;
