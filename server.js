const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5002;

app.use(express.json());

app.use('/', require('./routes/router'));

app.listen(PORT, (req, res)=>{
    console.log("Server running on PORT", PORT);
})