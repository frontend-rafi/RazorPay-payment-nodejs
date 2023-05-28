const express = require("express");
const cors = require('cors');
const { config } = require("dotenv");
config({path:"./config/config.env"});
const router = require("./routes/paymentsRoutes");

const app = express();

//middleware
app.use(cors());
  
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);



module.exports = app;