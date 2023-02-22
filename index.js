const express = require('express')
const json = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const ServerRoutes = require('./api/ServerRoutes');

const port = 5999;
const app = express();

app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-origin", "*")
    next();
})
app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST"],
        preflightContinue: true,
        credentials: true
    }
));
app.use(json());
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ml3vyhy.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("database connected");
    })
    .catch((e) => {
        console.log("Error detected at :", e);
    })

app.use("/", ServerRoutes);
app.listen(port, () => {
    console.log("server Running at port", port);
})