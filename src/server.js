"use stric";

require("dotenv").config();
require("./database/database");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const config = require("./config/config");

//INITIAL
const app = express();

//SETTINGS
app.set("port", config.PORT_SERVE);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//STAIC FILES
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
app.use('/user',require('./routes/Users.routes'));

module.exports = app;
