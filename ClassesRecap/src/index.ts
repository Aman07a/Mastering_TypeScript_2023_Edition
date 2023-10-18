class Player {
  first: string;
  last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  taunt(): void {
    console.log('BOOYAH!');
  }
}

const player1: Player = new Player('blue', 'steele');
player1.taunt();
console.log(player1.first);
console.log(player1.last);

const player2: Player = new Player('charlie', 'brown');
player2.taunt();
