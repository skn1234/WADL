const express = require('express');

const heyy = express();

heyy.use(express.static('public'));

heyy.listen(8080,()=>{
    console.log("Server is started");
});