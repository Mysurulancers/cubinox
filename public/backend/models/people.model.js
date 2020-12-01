
const mongoose = require('mongoose');

let peopleSchema = new mongoose.Schema({
    name:{
        type: "string",
        required : "Required"
    },
    age: {
        type: "number",
        required : "Required"
    },
    email:{
        type: "string",
        required : "Required"
    },
    phone: {
        type: "number",
        required : "Required"
    }
})

mongoose.model("people", peopleSchema);