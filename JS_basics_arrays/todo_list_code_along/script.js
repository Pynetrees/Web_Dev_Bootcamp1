var todos = ["buy new turtle"];
window.setTimeout(function () {
  // put all of your JS code from the lecture here
  var input = prompt("What would you like to do?");
  while (input !== "quit") {
    //handle new input
    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      //ask for new todo
      var newTodo = prompt("Enter new todo");
      //add to todos array
      todos.push(newTodo);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
  }
  console.log("ok, you quit the app")
}, 500);