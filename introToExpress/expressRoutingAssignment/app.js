var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
  var sounds = {
      pig: "Oink!",
      cow: "Moo!",
      dog: "Woof, Woof!",
      cat: "Meow!",
      goldfish: "Glub, Glub"
  };
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:txt/:num", function (req, res) {
  var num = Number(req.params.num);
  var txt = req.params.txt;
  var str = "";
  for (var i = 0; i <= num; i++) {
    str += txt + " ";
  };
  res.send(str);
});

app.get("*", function (req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(port, function () {
  console.log("Server Has Started!");
});