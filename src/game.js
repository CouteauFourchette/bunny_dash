import Floor from './floor';
import Player from './player';
import Spring from './moving_objects/spring';
import Spike from './moving_objects/spike';
import Block from './moving_objects/block';
import LevelGenerator from './level_generator';
import * as Util from './util';

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.floorSize = this.height / 5;
    this.boxSize = this.height / 10;
    this.spikes = [];
    this.boxes = [];
    this.springs = [];
    this.player = new Player(this.boxSize, this.boxSize, [this.width / 5, 100]);
    this.floor = new Floor(this.width, this.floorSize);
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
    return ([].concat(this.boxes, this.springs, this.spikes));
  }

  spawn() {
    const object = LevelGenerator.generate(this.boxSize, this.floorSize, this.width, this.height);
    switch (object.constructor) {
      case Spike:
        this.spikes.push(object);
        break;
      case Block:
        this.boxes.push(object);
        break;
      case Spring:
        this.springs.push(object);
        break;
      default:
        break;
    }
  }

  step() {
    this.checkCollisions();
    if (key.isPressed('space')) this.player.jump(this.height / 4);
    this.move();
    this.spawn();
  }

  move() {
    this.movingObjects().forEach((object) => {
      object.move();
    });
    this.player.move();
  }

  checkCollisions() {
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
    if (this.checkSpikeCollisions() !== 'none') {
      console.log('dead');
    }
    if (this.checkSpringCollisions() === 'top') {
      this.player.jump(this.height / 4);
    }
  }

  checkSpikeCollisions() {
    for (let i = 0; i < this.spikes.length; i += 1) {
      const spike = this.spikes[i];
      if (Util.checkCollision(this.player, spike) !== 'none') {
        return 'collision';
      }
    }
    return 'none';
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
