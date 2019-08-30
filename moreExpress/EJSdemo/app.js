var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home")
});

app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "suzy"},
    {title: "Adorable pet bunny", author: "Charlie"},
    {title: "Can you belive this pomsky??", author: "John"},
    {title: "Red Heelers are the best", author: "John"}
  ]

  res.render("posts", {posts: posts})
});

app.listen(port, function () {
  console.log("Server Has Started!");
});