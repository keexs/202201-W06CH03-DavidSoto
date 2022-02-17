require("dotenv").config();
const debug = require("debug")("know:");
const chalk = require("chalk");
const connectDataBase = require("./db");
const setUpServer = require("./server/server");

const port = process.env.SERVER_PORT || 6969;
const dbCredentials = process.env.MONGO_CREDENTIALS;

(async () => {
  try {
    await connectDataBase(dbCredentials);
    await setUpServer(port);
  } catch (error) {
    debug(chalk.redBright(`Server is not running`));
  }
})();
