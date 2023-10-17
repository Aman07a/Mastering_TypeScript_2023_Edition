// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 213, y: 12 };

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 12, y: 1234 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
}

const thomas: Person = {
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  id: 21837,
};

thomas.first = 'kasjdh';
// thomas.id = 238974;