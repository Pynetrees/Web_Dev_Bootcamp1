var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./models/user"),
  app = express(),
  port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/authDemo", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');
app.use(require("express-session")({
  secret: "Dogs are better by far than cats",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//===========
//ROUTES
//===========

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/secret", isLoggedIn, function (req, res) {
  res.render("secret");
});

//AUTH ROUTES
//show sign up form
app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  req.body.username
  req.body.password
  User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.render("register");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/secret");
      })
    }
  });
});

//LOGIM 
//render login form
app.get("/login", function (req, res) {
  res.render("login")
});

//login logic
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}), function (req, res) { });

//Logout
app.get("/logout", function(req, res){
  req.logOut();
  res.redirect("/");
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
};

app.listen(port, function () {
  console.log("authDemo Server Has Started!");
});