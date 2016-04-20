describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with a toDo', function() {
	  expect(ctrl.todo[0].text).toEqual("Wash car");
	});

	it('initialises with a toDo', function() {
	  expect(ctrl.todo[1].text).toEqual("Tidy room");
	});

	it('initialises with two toDo', function() {
	  expect(ctrl.todo.length).toEqual(2);
	});

	describe('#addToDo', function(){

		it('can add a toDo', function(){
			ctrl.addToDo("Wash hair");
			expect(ctrl.todo[2].text).toEqual("Wash hair");
		});
	});

	describe('#removeToDo', function(){

		it('can remove last item', function(){
			initialCount = ctrl.todo.length ;
		  ctrl.removeToDo();
		  expect(ctrl.todo.length).toEqual(initialCount - 1);
		});
	});

});