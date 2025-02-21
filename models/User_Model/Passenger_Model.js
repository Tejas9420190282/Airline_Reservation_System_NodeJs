// Passenger_Model.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Passenger_Model = sequelize.define(
    "Passenger_Model",
    {
        passenger_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        pnr: {
            type: DataTypes.STRING(255),
            references: {
                model: "Ticket_Model",
                key: "pnr",
            },
            onDelete: 'CASCADE'
        },
        name:  { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        age: { 
            type: DataTypes.INTEGER, 
            allowNull: false 
        },
        gender: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        meal_choice:
        { 
            type: DataTypes.STRING, 
            defaultValue : "no",
            allowNull : false
        },
        frequent_flier_no: {
            type: DataTypes.STRING,
            references: {
                model: "frequent_Filter_Detail_Model",
                key: "frequent_flier_no",
            },
        },
    },
    {
        tableName: "Passenger_Model",
        timestamps: false,
    }
);

exports.Passenger_Model = Passenger_Model;








