
// Payment_Model.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Payment_Model = sequelize.define(
    "Payment_Model",
    {
        payment_id: {
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
            onDelete: 'CASCADE', 
            charset: 'utf8mb4', // Add this line
            collate: 'utf8mb4_unicode_ci', // Add this line
        },
        payment_date: { type: DataTypes.DATE, allowNull: false 
            
        },
        payment_amount:  { 
            type: DataTypes.FLOAT, 
            allowNull: false 
        },
        payment_mode: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
    },
    {
        tableName: "Payment_Model",
        timestamps: false,
    }
);

exports.Payment_Model = Payment_Model;











