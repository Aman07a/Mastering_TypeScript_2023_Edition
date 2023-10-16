// Function Parameter Annotations
// function square(num: number): number {
//   return num * num;
// }

// function greet(person: string = 'stranger'): string {
//   return `Hi there, ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet('Tonya Harding');
doSomething('ChickenFace', 78, true);

function greet(person: string = 'stranger') {
  return `Hi there, ${person}`;
}

function square(num: number): number {
  return num * num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

const colors = ['red', 'orange', 'yellow'];
colors.map((color) => {
  return color.toFixed();
});
