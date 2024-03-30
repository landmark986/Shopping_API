const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const conn = process.env.ConnectionString;
mongoose.connect(conn, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('open', ()=> {console.log('Database Connected Successfully.....')});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;