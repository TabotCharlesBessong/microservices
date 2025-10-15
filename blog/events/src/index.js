const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 4005;
console.log("PORT:", port);

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:8000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:9000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:8002/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Event service running on port ${port}`);
});
