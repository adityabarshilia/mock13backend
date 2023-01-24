const express = require("express");
const Job = require("../models/job.model");
const app = express.Router();

app.post("/job", async (req, res) => {
  const { name, position, contract, location } = req.body;

  try {

      const job = await Job.create({ name, position, contract, location });
      return res.status(201).send(job);
    
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/job", async (req, res) => {
  
    try {
  
        const job = await Job.find({});
        return res.status(201).send(job);
      
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.put("/job/:id", async (req, res) => {
    const { name, position, contract, location } = req.body;
    const { id } = req.params;
  
    try {
  
        const job = await Job.findOneAndUpdate({_id: id}, { name, position, contract, location });
        return res.status(201).send({ message: "job updated", job });
      
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  app.delete("/job/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
  
        const job = await Job.findOneAndDelete({_id: id});
        return res.status(201).send({ message: "job deleted", job });
      
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

module.exports = app;
