import Block from './block';
import Floor from './floor';
import Player from './player';
import Spring from './spring';
import * as Util from './util';

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    const floorSize = this.height / 5;
    this.boxSize = this.height / 10;

    this.player = new Player(this.boxSize, this.boxSize, [this.width / 5, 100]);
    this.floor = new Floor(this.width, floorSize);
    // this.boxes = [new Block(this.boxSize, this.boxSize, [this.width, this.height - (floorSize + this.boxSize)]), new Block(this.boxSize, this.boxSize, [this.width + (2 * this.boxSize), this.height - (floorSize + 2 * this.boxSize)])];
    this.boxes = [];
    this.springs = [new Spring(this.boxSize, this.boxSize, [this.width + (5 * this.boxSize), this.height - floorSize])];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, this.width, this.height);
    
    this.floor.draw(ctx);

    this.movingObjects().forEach((object) => {
      object.draw(ctx);
    });
    this.player.draw(ctx);
  }

  movingObjects() {
    return ([].concat(this.boxes, this.springs));
  }

  step() {
    switch (this.checkFloorCollisions()) {
      case 'top':
        this.player.speed = 0;
        break;
      case 'side':
        console.log('dead');
        break;
      default:
        this.player.speed = 2;
        break;
    }
    if (this.checkSpringCollisions() === 'top') {
      this.player.jump(200);
    }
    if (key.isPressed('space')) this.player.jump(100);
    this.move();
  }

  move() {
    this.movingObjects().forEach((object) => {
      object.move();
    });
    this.player.move();
  }

  checkSpringCollisions() {
    for (let i = 0; i < this.springs.length; i += 1) {
      const spring = this.springs[i];
      if (Util.checkCollision(this.player, spring) === 'top') {
        return 'top';
      }
    }
    return 'none';
  }

  checkFloorCollisions() {
    let side = false;
    let top = false;
    const boxesAndFloor = this.boxes.concat([this.floor]);
    for (let i = 0; i < boxesAndFloor.length; i += 1) {
      const box = boxesAndFloor[i];
      switch (Util.checkCollision(this.player, box)) {
        case 'side':
          side = true;
          break;
        case 'top':
          top = true;
          break;
        default:
          break;
      }
    }
    if (side) return 'side';
    if (top) return 'top';
    return 'none';
  }
}

Game.ROWS = 10;
Game.COLUMNS = 60;
Game.BG_COLOR = '#5DBCD2';

export default Game;
