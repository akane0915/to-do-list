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

    $("#output ul").append("<li>" + newTask.description + "</li>");

    $("#output ul li").click(function(){
      this.remove();
    });

  });
});
