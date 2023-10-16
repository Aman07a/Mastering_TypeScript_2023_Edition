// Function Parameter Annotations
function greet(person: string = 'stranger'): string {
  return `Hi there, ${person}!`;
}

function square(num: number): number {
  return num * num;
}

square(3);
greet(324);
