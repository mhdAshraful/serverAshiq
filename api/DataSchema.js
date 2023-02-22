const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DSCHEMA = new Schema({
    id: { type: Number },
    title: { type: String },
    category: { type: String },
    description: { type: String },
    gallery: { type: Object },
}, { collection: "Portfolio" });

const mld = mongoose.model("DATA_SCHEMA", DSCHEMA);
module.exports = mld;