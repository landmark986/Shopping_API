const mongoose = require('mongoose');
const dbConn = require('../dbConnection');

let shoppingSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

let shoppingPortal = mongoose.model('shoppingPortal', shoppingSchema);

module.exports = shoppingPortal;