const dbUrl = require("../config/db");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbUrl.url;
db.studentData = require("./studentSchema.js")(mongoose);
module.exports = db;
