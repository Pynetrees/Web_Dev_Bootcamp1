var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res){
  res.render("home.ejs")
});

app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "suzy"},
    {title: "Adorable pet bunny", author: "Charlie"},
    {title: "Can you belive this pomsky??", author: "John"},
    {title: "Red Heelers are the best", author: "John"}
  ]

  res.render("posts.ejs", {posts: posts})
});

app.listen(port, function () {
  console.log("Server Has Started!");
});