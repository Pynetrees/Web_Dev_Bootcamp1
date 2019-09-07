var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express(),
  port = process.env.PORT || 3000

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({ 
//   name: "Acadia", 
//   image: "/images/acadia-national-park-80357_1920.jpg",
//   description: "Huge island off coast of Maine great camping & tons of wildlife" }, function(err, campground)
//   {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("NEWLY CREATED CAMPGROUND");
//     console.log(campground);
//   }
// });

app.get("/", function (req, res) {
  res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function (req, res) {
  //GET ALL CAMPGROUNDS FROM DB
  Campground.find({}, function (err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { campgrounds: allCampgrounds });
    }
  })
});

//CREATE - add new campground to DB
app.get("/campgrounds/new", function (req, res) {
  res.render("new");
});

//SHOW - Shows more info about one campground
app.get("/campgrounds/:id", function (req, res) {
  //find campground with provided ID
  Campground.findById(req.params.id, function (err, foundCampground) {
    if (err) {
      console.log(err)
    } else {
      //render show template with that campground
  res.render("show", {campground: foundCampground});
    }
  });
  
});

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = { name: name, image: image, description: desc };
  //CREATE NEW CAMPGROUND & SAVE 2 DATABASE
  Campground.create(newCampground, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  })
});



app.listen(port, function () {
  console.log("YelpCamp Server Has Started!");
});