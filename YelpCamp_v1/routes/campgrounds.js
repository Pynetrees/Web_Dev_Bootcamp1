var express = require("express"),
  router = express.Router(),
  Campground = require("../models/campground");

//INDEX - show all campgrounds
router.get("/", function (req, res) {
  req.user
  //GET ALL CAMPGROUNDS FROM DB
  Campground.find({}, function (err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", { campgrounds: allCampgrounds });
    }
  })
});

//CREATE - add new campground to DB
router.get("/new", isLoggedIn, function (req, res) {
  res.render("campgrounds/new");
});

//SHOW - Shows more info about one campground
router.get("/:id", function (req, res) {
  //find campground with provided ID
  Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
    if (err) {
      console.log(err)
    } else {
      //render show template with that campground
      res.render("campgrounds/show", { campground: foundCampground });
    }
  });
});

router.post("/", isLoggedIn, function (req, res) {
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

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;