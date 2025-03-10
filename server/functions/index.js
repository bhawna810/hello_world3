/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccountKey = require("./serviceAccountKey.json");

const express = require("express");
const app = express();

// Body parser for our JSON data
app.use(express.json());

// cross orgin
const cors = require("cors");
app.use(cors({ origin: true }));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// firebase credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// api endpoints
app.get("/", (req, res) => {
  return res.send("hello word");
});

// Import routers
const usersRouter = require("./routes/user");

// Use the router for the /api/users endpoint
app.use("/api/users", usersRouter);

const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

exports.app = functions.https.onRequest(app);