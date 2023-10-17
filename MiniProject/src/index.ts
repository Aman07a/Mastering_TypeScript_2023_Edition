const btn = document.getElementById('btn')!;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.getElementById('form')!;
const list = document.getElementById('todoList')!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodoText = input.value;
  const newLI = document.createElement('LI');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newLI.append(newTodoText);
  newLI.append(newTodoText);
  list.append(newLI);
  input.value = '';
}

form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', function () {
//   alert(input.value);
//   input.value = '';
// });
