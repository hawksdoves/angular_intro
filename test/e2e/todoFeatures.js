describe('Todos tracker', function() {
  it('has a title', function() {
    // We don't need to put in the full url as we set baseUrl in our config
    browser.get('/');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('displays todos', function(){
  	browser.get('/');
  	expect($$('#todos p').first().getText()).toContain("Wash car: Completed");
  	expect($$('#todos p').last().getText()).toContain("Tidy room: Not completed");
  });

  it('adds a todo', function(){
  	browser.get('/');
  	$('#new-todo-name').sendKeys("NewToDo");
	  $('#add-todo').click();
	  var todo = $$('#todos p').last().getText();
	  expect(todo).toEqual('NewToDo: Not completed');
	  });

  it('removes the last todo', function(){
  	browser.get('/');
  	$('#remove-todo').click();
	  var todo = $$('#todos p').last().getText();
	  expect(todo).toEqual('Wash car: Completed');
  });
});