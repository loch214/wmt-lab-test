const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;










mongoose.connect(MONGO_URI)
    .then(function(){
        console.log('connected to MongoDB!');
        app.listen(PORT, function(){
            console.log('server is running on port: '+PORT);
        });
    })
    .catch(function(error){
        console.log("Failed to connect to MongoDB...", error);
        })