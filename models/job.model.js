const { Schema, model } = require("mongoose");

const JobSchema = new Schema({
  name: String,
  position: String,
  contract: String,
  location: String,
});

const Job = model("job", JobSchema);

module.exports = Job;
