const { model, Schema } = require("mongoose");

const knowSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { collection: "know" }
);

const know = model("know", knowSchema, "know");

module.exports = know;
