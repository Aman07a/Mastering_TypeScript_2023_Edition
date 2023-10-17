interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todolist')!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  input.value = '';
}

function createTodo(todo: Todo) {
  const newLI = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;

  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
  });

  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', function () {
//   alert(input.value);
//   input.value = '';
// });
