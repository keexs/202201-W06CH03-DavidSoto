const debug = require("debug")("know: routers: know: ");
const express = require("express");
const chalk = require("chalk");
const know = require("../../db/Models/know");

const router = express.Router();

router.get("/list", async (req, res) => {
  debug(chalk.bgBlueBright("Sending a list of know"));
  const knows = await know.find();
  res.json({ knows });
});

router.post("/add", async (req, res) => {
  const newKnow = req.body;
  debug(chalk.bgGrey("Getting a know to add"));
  const createdKnow = await know.create(newKnow);
  res.status(201);
  res.json(createdKnow);
});

module.exports = router;
