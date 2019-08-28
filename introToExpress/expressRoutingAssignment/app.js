var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/pig", function(req, res){
  res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function(req, res){
  res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function(req, res){
  res.send("The dog says 'Woof Woof!'");
});

app.get("/repeat/:txt/:num", function(req, res){
  var num = Number(req.params.num);
  var txt = req.params.txt;
  var str = [];
  for(var i = 0; i<= num; i++){
    str.push(txt);
  };
  res.send(str.join(" "));
});

app.get("*", function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(port, function () {
  console.log("Server Has Started!");
});