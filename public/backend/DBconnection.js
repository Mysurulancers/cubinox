
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/crud",{useNewUrlParser: true}, (error)=> {
    if(!error) {
        console.log("DB connected");
    }else {
        console.log("error in connecting DB");
    }
})