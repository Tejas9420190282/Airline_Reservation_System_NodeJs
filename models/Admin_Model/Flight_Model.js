
// Flight_Model.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Flight_Model = sequelize.define(
    "Flight_Model",
    {
        flight_no: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        from_city:{ 
            type : DataTypes.STRING,
            allowNull: false,
        },
        to_city: { 
            type :DataTypes.STRING,
            allowNull: false,
        },
        departure_date: {
            type: DataTypes.DATEONLY,
            primaryKey: true,
            allowNull: false,
        },
        arrival_date:{ 
            type : DataTypes.DATEONLY,
            allowNull: false,
        },
        departure_time:{ 
            type : DataTypes.TIME,
            allowNull: false,
        },
        arrival_time: { 
            type :DataTypes.TIME,
            allowNull: false,
        },
        seats_economy: { 
            type :DataTypes.INTEGER,
            allowNull: false,
        },
        seats_business: { 
            type :DataTypes.INTEGER,
            allowNull: false,
        },
        price_economy: { 
            type :DataTypes.INTEGER,
            allowNull: false,        
        },
        price_business: { 
            type :DataTypes.INTEGER,
            allowNull: false,
        },
        jet_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Jet_Model",
                key: "jet_id",
            },
        },
    },
    {
        tableName: "Flight_Model",
        timestamps: false,
        indexes: [
            {
                name: "departure_date_index", // Add a separate index for departure_date
                fields: ["departure_date"],
            },
        ],
    }
);

exports.Flight_Model = Flight_Model;















