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
  //   sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  id: 21837,
  sayHi: () => {
    return 'Hello!';
  },
};

thomas.first = 'kasjdh';
// thomas.id = 238974;

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: 'Elton',
  age: 0.5,
  breed: 'Australian Shepherd',
  bark() {
    return 'WOOF WOOF!';
  },
};

interface ServiceDog extends Dog {
  job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 0.5,
  breed: 'Lab',
  bark() {
    return 'Bark!';
  },
  job: 'guide dog',
};
