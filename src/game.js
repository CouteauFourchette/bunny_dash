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

    this.player = new Player(this.height / 10, this.height / 10, [this.width / 5, 100]);
    // this.player.jump = true;
    this.floor = new Block(this.width, floorSize, [0, this.height - floorSize], 0);
    this.boxes = [new Block(this.height / 10, this.height / 10, [this.width, this.height - ((3 * this.height) / 10)]), this.floor];
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
    switch (this.checkFloorCollisions()) {
      case 'top':
        this.player.speed = 0;
        break;
      case 'side':
        this.player.speed = -100;
        break;
      default:
        this.player.speed = 0.5;
        break;
    }
    this.move();
  }

  move() {
    this.boxes.forEach((box) => {
      box.move();
    });
    this.player.move();
  }

  checkFloorCollisions() {
    for (let i = 0; i < this.boxes.length; i += 1) {
      const box = this.boxes[i];
      const xDistance = (this.player.pos[0] + (this.player.width / 2)) - (box.pos[0] + (box.width / 2));
      const yDistance = (this.player.pos[1] + (this.player.height / 2)) - (box.pos[1] + (box.height / 2));
      const width = (this.player.width + box.width) / 2;
      const height = (this.player.height + box.height) / 2;
      const crossWidth = width * xDistance;
      const crossHeight = height * yDistance;

      if (Math.abs(xDistance) <= width && Math.abs(yDistance) <= height) {
        if (crossWidth > crossHeight) {
          return 'side';
        }

        return 'top';
      }
    }
    return 'none';
  }
}

Game.ROWS = 10;
Game.COLUMNS = 60;
Game.BG_COLOR = '#fff';

export default Game;
