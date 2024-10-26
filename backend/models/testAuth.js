const mongoose = require('mongoose');

const testAuthSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String
});

// model
const testAuthModel = mongoose.model("testusers", testAuthSchema);
module.exports = testAuthModel;
