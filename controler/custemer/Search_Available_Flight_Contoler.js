const { Flight_Model } = require("../../models/Admin_Model/Flight_Model");

const searchAvailableFlightControler = async (req, res) => {

    try {

        const { origin, destination, departureDate, passengers, sit_class} =
            req.body;

        if (
            !origin || !destination ||
            !departureDate || !passengers  
        ) {
            console.log(`All input data are mandatory`);

            res.status(404).render("dashboard", {

                message: `All input data are mandatory`
            })    
        }

        const flights = await Flight_Model.findAll({
            
            where: {
                from_city : origin,
                to_city : destination,
                departure_date : departureDate,
            },
        });

        const availableFlights = flights.filter((flight) => {
            if (sit_class === 'Economy') {
              return flight.seats_economy >= passengers;
            } else if (sit_class === 'Business') {
              return flight.seats_business >= passengers;
            } else {
              return true; // If no class is selected, show all flights
            }
          });

          res.status(200).render("./custemer/search_Flight_Result", {

            flights : flights,
            sit_class : sit_class,
            passengers: passengers // Pass the passengers value
        })
    } 
    catch (error) {
        
        console.log(
            `Error in searchAvailableFlightControler API ${error.message}`.bgRed
        );

        res.send(500).render("dashboard", {
            message: `Error in searchAvailableFlightControler API ${error.message}`,
        });
    }
}

exports.searchAvailableFlightControler = searchAvailableFlightControler;