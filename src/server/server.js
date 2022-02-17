const debug = require("debug")("know: server");
const express = require("express");
const chalk = require("chalk");

const app = express();

const port = 6969;

const setUpServer = () =>
  new Promise((resolve, reject) => {
    const server = app.listen(
      (port,
      () => {
        debug(chalk.greenBright(`Running server on http://localhost:${port}`));
        resolve();
      })
    );

    server.on("error", (error) => {
      debug(chalk.redBright(`Server is not running`));
      reject(error);
    });
  });

module.exports = setUpServer;
