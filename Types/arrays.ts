const activeUsers: string[] = [];
activeUsers.push('Tony');

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = 'asd';

// const bools: Array<boolean> = [];
const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });
// coords.push({ x: 23, y: '8' });

const board: string[][] = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
];
