const { TableHints, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");


const frequent_Filter_Detail_Model = sequelize.define(
    'frequent_Filter_Detail_Model',
    {

        frequent_flier_no: {
            type: DataTypes.STRING(20),
            primaryKey: true,
          },
          mileage: DataTypes.INTEGER(10),
          customer_id: {
            type: DataTypes.STRING(20),
            references: {
              model: "Custemer_Model",
              key: "customer_id",
            },
        }
    },
    {
        tableName : "frequent_Filter_Detail_Model",
        timestamps : false
    },
  );
  
  exports.frequent_Filter_Detail_Model = frequent_Filter_Detail_Model;