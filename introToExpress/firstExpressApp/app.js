var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// "/" => "hi there!"
app.get("/", function(req, res){
  res.send("Hi there!");
});
//"/bye" => "Goodbye!"
app.get("/bye", function(req, res){
  res.send("Goodbye!");
});
//"/dog" => "MEOW!"
app.get("/dog", function(req, res){
  res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
  res.send("WELCOME TO A SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  res.send("WELCOME TO THE COMMENTS!!")
});

app.get("*", function(req, res){
  res.send("You are a Star!");
});

app.listen(port, function () {
  console.log("Server Has Started!");
});