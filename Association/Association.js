// association.js

const { Flight_Model } = require("../models/Admin_Model/Flight_Model");
const { frequent_Filter_Detail_Model } = require("../models/Admin_Model/frequent_Filter_Details_Model");
const { Jet_Model } = require("../models/Admin_Model/Jet_Model");
const { Custemer_Model } = require("../models/Custemer_Model");
const { Passenger_Model } = require("../models/User_Model/Passenger_Model");
const { Payment_Model } = require("../models/User_Model/Payment_Model");
const { Ticket_Model } = require("../models/User_Model/Ticket_Model");


Flight_Model.belongsTo(Jet_Model, {
    
    foreignKey: "jet_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

frequent_Filter_Detail_Model.belongsTo(Custemer_Model, {
    
    foreignKey: "customer_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Passenger_Model.belongsTo(frequent_Filter_Detail_Model, {
    
    foreignKey: "frequent_flier_no",
    onUpdate: "CASCADE",
});

Payment_Model.belongsTo(Ticket_Model, {
    
    foreignKey: "pnr",
    onUpdate: "CASCADE",
    onDelete: 'CASCADE',
});

Ticket_Model.hasMany(Payment_Model, {
    foreignKey: "pnr",
    onDelete: 'CASCADE',
    onUpdate: "CASCADE",
});

Ticket_Model.belongsTo(Custemer_Model, {
    foreignKey: "customer_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",

});

  Ticket_Model.belongsTo(Flight_Model, {
    
    foreignKey: "flight_no",
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
}); 

Ticket_Model.belongsTo(Flight_Model, {
    foreignKey: "journey_date",
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
});


Passenger_Model.belongsTo(Ticket_Model, {
    foreignKey: "pnr",
    onDelete: 'CASCADE', // Add this line
    onUpdate: 'CASCADE',
});

Ticket_Model.hasMany(Passenger_Model, {
    foreignKey: "pnr",
    onDelete: 'CASCADE', // Add this line
    onUpdate: 'CASCADE',
});














