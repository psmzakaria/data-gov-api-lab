const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const datarouter=require("./datarouter")
const data = require("./utils/data.json").map(item => {
  return {
    name: item.name,
    dscription: item.description
  };
});
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-sample.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(bodyParser());

app.use("/data", datarouter);
app.use(function(req, res, next) {
  res.status(404).json("Sorry can't find that!");
});

app.use(function(err, req, res, next) {
  res.status(500).json("My bad! try again later");
});

module.exports = app;
