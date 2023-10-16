// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: 'Thomas', last: 'Jenkins' });

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// printName({ first: 'Mick', last: 'Jagger', age: 473 });
// const singer = { first: 'Mick', last: 'Jagger', age: 473, isAlive: true };
// printName(singer);

// type Point = {
//   x: number;
//   y: number;
// };

// let coordinate: Point = { x: 34, y: 2 };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point {
//   return {
//     x: point.x * 2,
//     y: point.y * 2,
//   };
// }

type MyNum = number;
let age: MyNum = 24234;

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  numStreams: 12873321,
  credits: {
    producer: 'Phil Spector',
    writer: 'Alex North',
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12837,
  username: 'catgurl',
};

console.log(user.id);
user.id;
