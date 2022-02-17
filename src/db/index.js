const debug = require("debug")("know: db");
const mongoose = require("mongoose");
const chalk = require("chalk");

const connectDataBase = (dbCredentials) =>
  new Promise((resolve, reject) => {
    mongoose.connect(dbCredentials, (error) => {
      if (error) {
        reject(new Error(`Not connected to DataBase ${error.message}`));
        return;
      }
      debug(chalk.green("Connection to DB succesful"));
      resolve();
    });
  });

module.exports = connectDataBase;
