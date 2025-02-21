
// passengersFormControler.js

const { Passenger_Model } = require("../../models/User_Model/Passenger_Model");
const { Ticket_Model } = require("../../models/User_Model/Ticket_Model");


const passengersFormControler = async (req, res) => {

    try {

        const { 
            passengers,
            selectedFlight,
            sit_class,
            flight_no,
            departure_date,
            origin,
            destination,
            lounge_access,
            priority_checkin,
            insurance,
            passenger_name, // Array of names
            age, // Array of ages
            gender, // Array of genders
            infinite_meal // Array of meal options
        } = req.body;
        
        console.log("departure_date : " + departure_date);


        // Fix flight_no: Take the first value if it's an array
        const parsedFlightNo = Array.isArray(flight_no) 
            ? parseInt(flight_no[0], 10) 
            : parseInt(flight_no, 10);

        if (isNaN(parsedFlightNo)) {
            return res.status(400).render("dashboard", {
                message: "Invalid flight number.",
            });
        }

        // Fix departure_date: Take the first value if it's an array
        const parsedDepartureDate = Array.isArray(departure_date)
    ? departure_date[0]
    : departure_date.includes(",")
        ? departure_date.split(",")[0] // Take the first valid date
        : departure_date;

if (!/^\d{4}-\d{2}-\d{2}$/.test(parsedDepartureDate)) {
    console.log("Invalid departure date format. Use YYYY-MM-DD.");
    return res.status(400).render("dashboard", {
        message: "Invalid departure date format. Use YYYY-MM-DD.",
    });
}



// Convert parsedDepartureDate to a valid Date object
const journeyDate = new Date(parsedDepartureDate);
if (isNaN(journeyDate.getTime())) {
    console.log("Invalid date value for journey_date.");
    return res.status(400).render("dashboard", {
        message: "Invalid date value for journey_date.",
    });
}




        const names = Array.isArray(passenger_name) ? passenger_name : [passenger_name];
        const ages = Array.isArray(age) ? age : [age];
        const genders = Array.isArray(gender) ? gender : [gender];
        const meals = Array.isArray(infinite_meal) ? infinite_meal : [infinite_meal];

        // Highlight: Validate required fields
        if (!passengers || !names.length || !ages.length || !genders.length || !meals.length) {
            console.log(`Missing fields: passengers=${passengers}, names=${names}, ages=${ages}, genders=${genders}, meals=${meals}`);
            return res.status(400).render("dashboard", {
                message: "Missing required fields.",
            });
        }

        const pnr = generateUniquePNR();  
        
        console.log("flight_no : ", flight_no);

        console.log("departure_date : ", departure_date);
        
        
        
        // Highlight: Create ticket in TicketDetailModels
        const ticket = await Ticket_Model.create({
            pnr: pnr,
            flight_no: parsedFlightNo,
            reservation_date: new Date(),
            journey_date:journeyDate,
            class: sit_class,
            booking_status: "CONFIRMED",
            no_of_passengers: parseInt(passengers, 10), // Convert to integer
            lounge_access: lounge_access,
            priority_checkin: priority_checkin,
            insurance: insurance,
            origin: origin,
            destination: destination,
             
//            customer_id: 1 // 
        })


        const passengersData = names.map((name, index) => ({
            pnr: pnr, // Associate passenger with ticket
            name: name,
            age: ages[index],
            gender: genders[index],
            meal_option: meals[index] === "Yes" ? true : false,
            frequent_flier_no: null // Optional field
        }));

        await Passenger_Model.bulkCreate(passengersData);

        res.status(200).redirect(`/payment-details/${pnr}`);
    } 
    catch (error) {
        console.log(`Error in passengersFormControler API: ${error.message}`.bgRed);
        res.status(500).render("dashboard", {
            message: `Error saving passenger details: ${error.message}`,
        });
    }
}

function generateUniquePNR() {
    return "PNR" + Math.random().toString(36).substr(2, 6).toUpperCase();
}


exports.passengersFormControler = passengersFormControler;