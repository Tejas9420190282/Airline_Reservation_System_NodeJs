
// flightScheduleControler.js

const { Flight_Model } = require("../../models/Admin_Model/Flight_Model");


const flightScheduleControler = async (req, res) => {
    try {

        const {
            flightNumber,
            origin,
            destination,
            departureDate,
            departureTime,
            arrivalDate,
            arrivalTime,
            economySeats,
            businessSeats,
            economyPrice,
            businessPrice,
            jetId,
        } = req.body;

        if (
            !flightNumber ||
            !origin ||
            !destination ||
            !departureDate ||
            !departureTime ||
            !arrivalDate ||
            !arrivalTime ||
            !economySeats ||
            !businessSeats ||
            !economyPrice ||
            !businessPrice ||
            !jetId
        ) {
            res.status(404).render("dashboard", {
                message: "All the details are mandatory",
            });
        }

        const flightScheduleRouter = await Flight_Model.create({
            
            flight_no : flightNumber,
            from_city : origin,
            to_city : destination,
            departure_date : departureDate,
            arrival_date : arrivalDate,
            departure_time : departureTime,
            arrival_time : arrivalTime,
            seats_economy : economySeats,
            seats_business : businessSeats,
            price_economy : economyPrice,
            price_business : businessPrice,
            jet_id : jetId
        });

        if (!flightScheduleRouter) {
            
            res.status(400).render("dashboard", {
            
                message : `All the inputs are Mandatory`
            })
        }

        res.status(200).render("dashboard", {
            
            message : `Flight successfully Schedule`
        })
        
    } 
    catch (error) {

        console.log(`Error in flightScheduleControler API : ${error.message}`);

        res.status(500).render('dashboard',{
            message : `Error in flightScheduleControler API : ${error.message}`
        });
    }
}

exports.flightScheduleControler = flightScheduleControler;