
const express = require('express');
const cors = require('cors');
const connecton = require("./DBconnection");
const peopleModel = require("./models/people.model");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  

app.listen("8000", ()=> {
    console.log("server connected");
})

app.get("/", (req,res)=> {
    res.send({res:"yadhu"})
})

app.post("/employee", (req,res)=> {
    console.log(req.body)
})