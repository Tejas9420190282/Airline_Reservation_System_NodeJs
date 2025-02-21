const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const AdminModel = sequelize.define(
    "AdminModel",
    {
        // Model attributes are defined here
        admin_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        
        pwd: { 
            type: DataTypes.STRING,
            allowNull : false
         },
        
         staff_id: { 
            
            type: DataTypes.STRING,
            allowNull : false
        },
        
        name: { 
            type: DataTypes.STRING, 
            allowNull : false
        },
        
        email: { 
            type: DataTypes.STRING,
            allowNull : false,
            unique : true,
        },
    },
    {
        tableName: "AdminModel",
        timestamps: false,
    }
);

exports.AdminModel = AdminModel;
