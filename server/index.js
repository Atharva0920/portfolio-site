const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();;
const path = require('path');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to the Portfolio Site API");});

app.listen(PORT,() => {
    console.log(`Server is running on Port ${PORT}`);
});