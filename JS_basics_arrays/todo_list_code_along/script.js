var todos = ["buy new turtle"];
window.setTimeout(function () {
  // put all of your JS code from the lecture here
  var input = prompt("What would you like to do?");
  while (input !== "quit") {
    //handle new input
    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
  }
  console.log("ok, you quit the app")

  function listTodos() {
    console.log("**********");
    todos.forEach(function (todo, i) {
      console.log(i + ": " + todo);
    })
    console.log("**********");
  }
  function addTodo() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
  }
  function deleteTodo() {
    //ask for index of list item
    var index = prompt("Enter index of todo to delete.");
    //delete item
    todos.splice(index, 1);
    console.log("Deleted todo");
  }
}, 500);