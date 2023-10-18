class Player {
  taunt(): void {
    console.log('BOOYAH!');
  }
}

const player1: Player = new Player();
player1.taunt();

const player2: Player = new Player();
player2.taunt();
