const btn = document.getElementById('btn')!;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.getElementById('form')!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log('SUBMITTED!');
}

form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', function () {
//   alert(input.value);
//   input.value = '';
// });
