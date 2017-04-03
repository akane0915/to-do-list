//Business Logic
function Task(description){
  this.description = description;
}

//User Interface Logic
$(document).ready(function(){
  // initially hide clear button
  $("#clear").addClass("hidden");

  // submiut a new task to to-do list
  $("#add-task").submit(function(e) {
    e.preventDefault();
    var taskInput = $("#add-task input").val();
    // create new task object
    var newTask = new Task(taskInput);

    // add new task to list
    $("#todo ul").append("<li><input type='checkbox'>" + newTask.description + "</li>");

    // when user clicks task, remove it from to-do and send it to completed
    $("#todo ul li").last().click(function(){
      $("#completed-tasks ul").append("<li>" + $(this).text() + "</li>");
      this.remove();
      // show clear button
      $("#clear").removeClass("hidden");
    });
    // clear text input
    this.reset();
  });
  // clear completed list
  $("#clear").click(function(){
    $("#completed-tasks ul").text("");
    $(this).addClass("hidden");
  });
});
