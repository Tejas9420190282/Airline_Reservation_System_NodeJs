
// Custemer_Model.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Custemer_Model = sequelize.define(
    "Custemer_Model",
    {
        customer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pwd: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        phone_no: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: "Custemer_Model",
        timestamps: false,
    }
);

exports.Custemer_Model = Custemer_Model;
