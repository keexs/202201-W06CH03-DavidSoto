const chalk = require("chalk");
const debug = require("debug")("know: server: middleware: errors:");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ error: "Resource not found" });
};

const superError = (err, req, res) => {
  debug(
    chalk.underline.bgRedBright(
      "Yep, everything just exploded, gl with your life"
    )
  );
  res.status(500);
  res.json({ error: "*Sad explosion noises*" });
};

module.exports = { notFoundError, superError };
