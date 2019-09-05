var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
var campgrounds = [
  { name: "Kite Lake", image: "/images/mountains-374429_1920.jpg" },
  { name: "Boundary Waters", image: "/images/bwca-1150305_1920.jpg" },
  { name: "Lost Creek", image: "/images/nature-1209302_1920.jpg" },
  { name: "Buffalo Peaks", image: "/images/mountains-718911_1920.jpg" },
  { name: "Acadia", image: "/images/acadia-national-park-80357_1920.jpg" }
]

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {

  res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function (req, res) {
  res.render("new");
});

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.listen(port, function () {
  console.log("YelpCamp Server Has Started!");
});