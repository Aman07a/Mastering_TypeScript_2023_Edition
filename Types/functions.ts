// Function Parameter Annotations
const doSomething = (person: string, age: number, isFunny: boolean) => {};

function greet(person: string = 'stranger'): string {
  return `Hi there, ${person}!`;
}

function square(num: number): number {
  return num * num;
}

square(3);
greet('Tonya Harding');
doSomething('ChickenFace', 78, true);
