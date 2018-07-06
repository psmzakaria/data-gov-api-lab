const express = require("express");
const router = express.Router();
const data = require("./utils/data.json");

router.get("/404", (req, res, next) => {
    next("Sorry")
});

router.get("/data/search", (req, res) => {
  const schutz = data.find(
    element => element.description === req.query.description
  );
  console.log("Search", schutz);
  res.json(schutz);
});
router.get("/data/:name", (req, res) => {
  const schutz = data.find(element => element.name === req.params.name);
  res.json(schutz);
});

router.post("/data", (req, res) => {
  data = [...data, req.body];
  res.send(data);
});

router.put("/data/:name", (req, res) => {
  data = data.map(data => {
    const wahlenSchutz = req.params.name;
    if (data.name === wahlenSchutz) return Object.assign(data, req.body);
    else return data;
  });
  res.send(data);
});

router.delete("/data/:name", (req, res) => {
  data = data.filter(data => data.name != req.params.name);
  res.send(data);
});
module.exports = router;
