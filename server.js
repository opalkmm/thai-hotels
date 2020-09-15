//import dependencies - express, handlebars framework
var express = require("express");
var exphbs = require("express-handlebars");

//instance of an express app
var app = express();
//set port
var PORT = process.env.PORT || 8080;
//then set handlebars as the default template engine 
//default layout in main file
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//mock data from the server
var hotels = [
    {name: 'Anantara', city: 'Huahin', price: 600},
    {name: 'Continental', city: 'Bangkok', price: 400},
    {name: 'Oriental', city: 'Bangkok', price: 1000},
    {name: 'Pullman', city: 'Bangkok', price: 450},
    {name: 'Shangri-La', city: 'Chiangmai', price: 250}
  ];

//create routes when the name is requested
app.get('/hotel/:name', function(req,res){
    //display name, city, and price of the hotels


    
})

//another to route to the mian page where all hotels available are being listed
