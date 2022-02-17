const debug = require("debug")("know: server:");
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const { notFoundError, superError } = require("./middleware/errors");

const app = express();

const port = process.env.SERVER_PORT || 6969;

const setUpServer = () =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.greenBright(`Running server on http://localhost:${port}`));
      resolve();
    });
    server.on("error", (error) => {
      debug(chalk.redBright(`Server is not running`));
      reject(error);
    });
  });

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  debug(chalk.blueBright("A new request have arrived"));
  next();
});

app.use(notFoundError);
app.use(superError);

module.exports = setUpServer;
