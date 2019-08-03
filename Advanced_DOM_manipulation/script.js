// My solution to the problem \/ \/ \/ \/ 

// var button = document.querySelector("button");
// var body = document.body;

// button.addEventListener("click", changeColor);

// function changeColor(){
//   if(body.style.backgroundColor === "white"){
//     orangeColor();
//   } else {
//     whiteColor();
//   }
// };

// function whiteColor(){
//   body.style.backgroundColor = "white";
// };

// function orangeColor(){
//   body.style.backgroundColor = "orange";
// };

// Course solution to problem \/ \/ \/ \/ \/ 

var button = document.querySelector("button");
var isOrange = false;

button.addEventListener("click", function(){
  if(isOrange){
    document.body.style.background = "white";
  } else {
    document.body.style.background = "Orange";
  }
  isOrange = !isOrange;
});