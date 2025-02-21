const { Sequelize } = require("sequelize");


const sequelize = new Sequelize('airline2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' 
});



const dbConnect = async () => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.'.bgGreen);
      } 
      catch (error) {
        console.error(`Unable to connect to the database: ${error}`.bgRed);
      }
}

exports.dbConnect = dbConnect;
exports.sequelize = sequelize;