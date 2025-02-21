const { TableHints, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Jet_Model = sequelize.define(
    'Jet_Model',
    {
        jet_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true,
          },
          jet_type: { 
            type : DataTypes.STRING,
            allowNull : false
        },
          total_capacity: { 
            type : DataTypes.INTEGER,
            allowNull : false,
        },
          active: { 
            type : DataTypes.STRING,
            allowNull : true,
        },
    },
    {
       tableName : 'Jet_Model',
       timestamps : false 
    },
  );

  exports.Jet_Model = Jet_Model;