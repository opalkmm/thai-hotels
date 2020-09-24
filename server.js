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
  { name: "Anantara", city: "Huahin", price: 600 },
  { name: "Continental", city: "Bangkok", price: 400 },
  { name: "Oriental", city: "Bangkok", price: 1000 },
  { name: "Pullman", city: "Bangkok", price: 450 },
  { name: "Shangri-La", city: "Chiangmai", price: 250 },
];

//create routes when the name is requested
app.get("/hotel/:name", function (req, res) {
   
  //display name, city, and price of the hotels
  for (var i = 0; i < hotels.length; i++) {
    if (hotels[i].name === req.params.name) {
      return res.render("hoteldeets", hotels[i]);
    }
  }
});

//another to route to the mian page where all hotels available are being listed

app.get("/hotel", function(req,res){
  res.render("eachHotel", {eachHotel: hotels})
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
