let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
// movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero";

let gameOver: boolean = true;
gameOver = true;
// gameOver = 'true';

null;
undefined;

let nothing: null = null;
let foo: undefined = undefined;

// Type Inference
let tvShow = 'Olive Kitteridge';
tvShow = 'The Other Two';
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = 'asd';

// The Any Type
let thing: any = 'hello';
thing = 1;
thing = 1;
thing = false;
thing();
thing.toUpperCase();

// Delayed Initialization & Implicit Any
const movies = ['Arraival', 'The Thing', 'Aliens', 'Amadeus'];
let foundMovie: string;

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus';
  }
}

// Function Parameter Annotations
function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}`;
}

square(3);
greet(324);
