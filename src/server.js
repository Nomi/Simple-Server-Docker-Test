const fs = require('fs');
const configRaw = fs.readFileSync('config.json');
const config = JSON.parse(configRaw);

const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to this simple server that has no other functionality than displaying this message. <br>\
    It is this way because the main focus of this project is to test how Dockerization for this would look like.");
});

app.listen(config.port, function(){
    console.log(`App listening on port ${config.port}.`);
});