const { Router } = require("express");
const DATA_SCHEMA = require("./DataSchema");
const ServerRoutes = Router();

ServerRoutes.route("/api").get((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("backend Connected");
});

ServerRoutes.route("/api/allData").get((req, res) => {
    DATA_SCHEMA.find((err, data) => {
        if (err) {
            // console.log(err);
            res.send(err.message);
        } else {
            const documetSize = Buffer.byteLength(JSON.stringify(data), "utf-8");
            res.setHeader("Content-length", documetSize);
            res.status(200).json(data);
        }
    }).lean();

})

module.exports = ServerRoutes;