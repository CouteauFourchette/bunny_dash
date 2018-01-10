import Floor from './floor';
import Spring from './moving_objects/spring';
import Spike from './moving_objects/spike';
import Block from './moving_objects/block';
import LevelGenerator from './level_generator';
import * as Util from './util';

class Game {
  constructor(players) {
    this.LevelGenerator = new LevelGenerator(Game.BOXSIZE, Game.FLOORSIZE, Game.WIDTH, Game.HEIGHT);
    this.spikes = [];
    this.boxes = [];
    this.springs = [];
    this.players = players;
    this.floor = new Floor(Game.WIDTH, Game.FLOORSIZE);
    this.over = false;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    
    this.floor.draw(ctx);

    this.movingObjects().forEach((object) => {
      object.draw(ctx);
    });
  
    this.players.forEach(player => player.draw(ctx));
  }

  movingObjects() {
    return ([].concat(this.boxes, this.springs, this.spikes));
  }

  spawn() {
    const objects = this.LevelGenerator.generate();
    objects.forEach((object) => {
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
    });
  }

  step(delta) {
    this.players.forEach((player, idx) => {
      this.checkCollisions(player);
      player.getAction(this, idx);
      if (player.isJumping) player.jump(Game.HEIGHT * 0.27);
    });
    this.move(delta);
    this.spawn();
    this.players = this.players.filter(player => !player.dead);
  }

  move(delta) {
    const objects = this.movingObjects();
    objects.forEach((object) => {
      object.move(delta);
      if (object.pos[0] < -Game.BOXSIZE) {
        this.remove(object);
      }
    });
    this.floor.move(delta);
    this.players.forEach(player => player.move(delta));
  }

  remove(object) {
    const spikeIndex = this.spikes.indexOf(object);
    if (spikeIndex > -1) {
      const index = spikeIndex;
      this.spikes.splice(index, 1);
      return;
    }
    const boxIndex = this.boxes.indexOf(object);
    if (boxIndex > -1) {
      const index = boxIndex;
      this.boxes.splice(index, 1);
      return;
    }
    const springIndex = this.springs.indexOf(object);
    if (springIndex > -1) {
      const index = springIndex;
      this.springs.splice(index, 1);
    }
  }

  checkCollisions(player) {
    switch (this.checkBoxCollisions(player)) {
      case 'top':
        player.speed = 0;
        player.pos[1] = Math.round(player.pos[1] / Game.BOXSIZE) * Game.BOXSIZE;
        break;
      case 'side':
        player.dead = true;
        break;
      default:
        player.speed = (Game.BOXSIZE / 7);
        break;
    }
    if (this.checkFloorCollision(player)) {
      player.speed = 0;
      player.pos[1] = Math.round(player.pos[1] / Game.BOXSIZE) * Game.BOXSIZE;
    }
    if (this.checkSpikeCollisions(player) !== 'none') {
      player.dead = true;
    }
    if (this.checkSpringCollisions(player) === 'top') {
      player.jump(Game.HEIGHT * 0.37);
    }
  }

  checkSpikeCollisions(player) {
    for (let i = 0; i < this.spikes.length; i += 1) {
      const spike = this.spikes[i];
      if (spike.pos[0] > player.pos[0] + Game.BOXSIZE) return 'none';
      if (Util.checkCollision(player, spike) !== 'none') {
        return 'collision';
      }
    }
    return 'none';
  }

  checkSpringCollisions(player) {
    for (let i = 0; i < this.springs.length; i += 1) {
      const spring = this.springs[i];
      if (spring.pos[0] > player.pos[0] + Game.BOXSIZE) return 'none';
      if (Util.checkCollision(player, spring) === 'top') {
        spring.on = true;
        return 'top';
      }
    }
    return 'none';
  }

  checkFloorCollision(player) {
    if (Util.checkCollision(player, this.floor) === 'top') {
      return true;
    }
    return false;
  }

  checkBoxCollisions(player) {
    let side = false;
    let top = false;
    for (let i = 0; i < this.boxes.length; i += 1) {
      const box = this.boxes[i];
      switch (Util.checkCollision(player, box)) {
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

Game.WIDTH = 1680;
Game.HEIGHT = 840;
Game.BOXSIZE = Game.HEIGHT / 10;
Game.FLOORSIZE = Game.HEIGHT / 5;
Game.BG_COLOR = '#5DBCD2';

export default Game;
