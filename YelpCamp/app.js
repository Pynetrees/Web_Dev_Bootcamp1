var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  var campgrounds = [
    { name: "Kite Lake", image: "/images/mountains-374429_1920.jpg" },
    { name: "Boundary Waters", image: "/images/bwca-1150305_1920.jpg" },
    { name: "Lost Creek", image: "/images/nature-1209302_1920.jpg" },
    { name: "Buffalo Peaks", image: "/images/mountains-718911_1920.jpg" },
    { name: "Acadia", image: "/images/acadia-national-park-80357_1920.jpg" }
  ]
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(port, function () {
  console.log("YelpCamp Server Has Started!");
});