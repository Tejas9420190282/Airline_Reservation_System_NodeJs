// Ticket_Model.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const { Flight_Model } = require("../Admin_Model/Flight_Model");

const Ticket_Model = sequelize.define(
    "Ticket_Model",
    {
        pnr: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            charset: 'utf8mb4', // Add this line
            collate: 'utf8mb4_unicode_ci', // Add this line
        },
        date_of_reservation: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        flight_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Flight_Model",
                key: "flight_no",
            },
        },
        journey_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            references: {
                model: "Flight_Model",
                key: "departure_date",
            },
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        booking_status: {
            type: DataTypes.STRING,
            allowNull : false
        },
        no_of_passengers: { type: DataTypes.INTEGER, allowNull: false },
        lounge_access: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "no",
        },
        priority_checkin: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "no",
        },
        insurance: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "no",
        },
        payment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Payment_Model",
                key: "payment_id",
            },
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Custemer_Model",
                key: "customer_id",
            },
        },
    },
    {
        tableName: "Ticket_Model",
        timestamps: false,
    }
);

Ticket_Model.belongsTo(Flight_Model, {
    foreignKey: {
        name: 'flight_no',
        allowNull: false,
    },
    targetKey: 'flight_no',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
});

Ticket_Model.belongsTo(Flight_Model, {
    foreignKey: {
        name: 'journey_date',
        allowNull: false,
    },
    targetKey: 'departure_date',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
});

exports.Ticket_Model = Ticket_Model;













