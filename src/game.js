import Block from './block';
import Player from './player';

class Game {
  constructor(width, height) {
    this.level = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.width = width;
    this.height = height;
    const floorSize = this.height / 5;

    this.player = new Player(this.height / 10, this.height / 10, [this.width / 5, this.height - ((3 * this.height) / 10)]);
    this.player.jump = true;
    this.floor = new Block(this.width, floorSize, [0, this.height - floorSize], 0);
    this.boxes = [new Block(this.height / 10, this.height / 10, [this.width, this.height - ((3 * this.height) / 10)])];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, this.width, this.height);
    
    this.floor.draw(ctx);

    this.boxes.forEach((box) => {
      box.draw(ctx);
      console.log(box.pos);
    });
    this.player.draw(ctx);
  }

  step() {
    this.checkFloorCollisions();
    this.move();
  }

  move() {
    this.boxes.forEach((box) => {
      box.move();
    });
    this.player.move();
  }

  checkFloorCollisions() {
    this.boxes.forEach((box) => {
      if ((this.player.pos[1] + this.player.height > box.pos[1]) && this.player.speed > 0) {
        this.player.speed = 0;
      }
    });
  }
}

Game.ROWS = 10;
Game.COLUMNS = 60;
Game.BG_COLOR = '#fff';

export default Game;
