const todoList = [];

renderTodoList();

function addTodo() {
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  const dueDateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInputElement.value;

  if (name === '' || dueDate === '') {
    alert('Please enter both a name and due date.');
    return;
  }

  todoList.push({
    name: name,
    dueDate: dueDate
  });

  // Clear the input fields
  nameInputElement.value = '';
  dueDateInputElement.value = '';

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}