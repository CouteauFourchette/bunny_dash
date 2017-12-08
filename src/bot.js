import { cloneDeep } from 'lodash';
import * as Util from './util';
import Player from './player';

class Bot {
  constructor(game) {
    this.game = game;
  }

  closeObjects() {
    return this.game.movingObjects().filter(object => (object.pos[0] < (this.game.player.pos[0] + (3 * this.game.boxSize)) && (object.pos[0] > this.game.player.pos[0])));
  }

  getAction() {
    const timeDelta = 1000 / 60;
    const simulate = cloneDeep(this.game);
    if (this.game.player.speed === 0) {
      if (this.closeObjects().length > 0) {
        simulate.player.jump(this.game.height * 0.20);
        simulate.move(timeDelta);
        while (simulate.player.speed !== 0 && !simulate.over) {
          simulate.checkCollisions();
          simulate.move(timeDelta);
        }
        simulate.checkCollisions();
        if (simulate.over) {
          this.game.jump = false;
        } else {
          this.game.jump = true;
        }
      }
    } else {
      this.game.jump = false;
    }
  }
}


export default Bot;
