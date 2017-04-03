//Business Logic
function Task(description){
  this.description = description;
}

//User Interface Logic
$(document).ready(function(){
  $("#add-task").submit(function(e) {
    e.preventDefault();
    var taskInput = $("#add-task input").val();

    var newTask = new Task(taskInput);

    $("#todo ul").append("<li><input type='checkbox'>" + newTask.description + "</li>");

    $("#todo ul li").last().click(function(){
      $("#completed-tasks ul").append("<li>" + $(this).text() + "</li>").addClass("strike-through");
      this.remove();
    });

    this.reset();
  });
});
