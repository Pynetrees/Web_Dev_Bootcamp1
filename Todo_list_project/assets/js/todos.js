//Check off Todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//X Deletes Todo
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text'").keypress(function (event) {
  if (event.which === 13) {
    //grabbing todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li & add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
  };
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});