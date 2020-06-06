
const express = require('express');

const bodyParser = require('body-parser');
/*
const mongoose = require('mongoose');
require('dotenv').config(); // Manage .env file
*/

const app = express();

// Manage the CORS autorization 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all website to access
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Allow only some headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Allow only some type of request
    next();
  });

app.use(bodyParser.json()); // Parse the content of the request  

module.exports = app;