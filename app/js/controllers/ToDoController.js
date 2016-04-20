toDoApp.controller('ToDoController', [function() {
  
  var todo1 = {text: "Wash car", completed: true};
	var todo2 = {text: "Tidy room", completed: false};

  this.todo = [todo1, todo2];

  this.addToDo = function(task){
  	this.todo.push({text: task, completed: false});
  };

  this.removeToDo = function(){
  	this.todo.pop();
  };

}]);
