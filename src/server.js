const express = require('express');
const app = express();

app.get('/', (res, req) =>{
    res.send("Welcome to this simple server that has no other functionality than displaying this message. \
    It is this way because the main focus of this project is to test how Dockerization for this would look like.");
});

app.listen(3000, function(){
    console.log("App listening on port 3000.");
});