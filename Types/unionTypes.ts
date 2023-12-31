let age: number | string | boolean = 21;
age = 23;
age = '24';

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number): number {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
  return price * tax;
}

console.log(calculateTax(45, 0.07));
console.log(calculateTax('$45', 0.07));

// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, 4, true, 'asdas', {}];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });

let zero: 0 = 0;
const mood: 'Happy' | 'Sad' = 'Happy';
// mood = 'Sad';

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

// let today: DayOfWeek = 'weds';
