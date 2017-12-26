import { cloneDeep } from 'lodash';
import Player from './player';


function closeObjects(game, idx) {
  return game.movingObjects().filter(object =>
    (object.pos[0] < (game.players[idx].pos[0] + (3 * game.boxSize)) &&
      (object.pos[0] > game.players[idx].pos[0])));
}


class BotPlayer extends Player {
  getAction(game, idx) {
    const timeDelta = 1000 / 60;
    const simulate = cloneDeep(game);
    if (game.players[idx].speed === 0) {
      if (closeObjects(game, idx).length > 0) {
        simulate.players[idx].jump(game.height * 0.27);
        simulate.move(timeDelta);
        while (simulate.players[idx].speed !== 0 && !simulate.over) {
          simulate.checkCollisions(simulate.players[idx]);
          simulate.move(timeDelta);
        }
        simulate.move(timeDelta);
        simulate.checkCollisions(simulate.players[idx]);
        if (simulate.players[idx].dead) {
          this.isJumping = false;
        } else {
          this.isJumping = true;
        }
      }
    } else {
      this.isJumping = false;
    }
  }
}

export default BotPlayer;
