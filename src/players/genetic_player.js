import Player from './player';
import Game from '../game';
import Spring from '../moving_objects/spring';
import Spike from '../moving_objects/spike';
import Block from '../moving_objects/block';
import Network from '../genetics/network';

function closestObject(game, idx) {
  const playerPos = game.players[idx].pos[0];
  return game.movingObjects().sort((a, b) => {
    if (Math.abs(a.pos[0] - playerPos) > Math.abs(b.pos[0] - playerPos)) return 1;
    if (Math.abs(a.pos[0] - playerPos) < Math.abs(b.pos[0] - playerPos)) return -1;
    return 0;
  })[0];
}


class GeneticPlayer extends Player {
  constructor(width, height, initialPos, network) {
    super(width, height, initialPos);
    this.network = new Network(4, [16, 16], 1);
  }

  getAction(game, idx) {
    const closestObjects = closestObject(game, idx);
    let positionX = 0;
    let positionY = 0;
    let type1 = 0;
    let type2 = 0;
    if (closestObjects) {
      switch (closestObjects.constructor) {
        case Spike:
          type1 = 1;
          type2 = 0;
          break;
        case Block:
          type1 = 0;
          type2 = 1;
          break;
        case Spring:
          type1 = 1;
          type2 = 1;
          break;
        default:
          type1 = 0;
          type2 = 0;
          break;
      }
      positionX = closestObjects.pos[0] / Game.WIDTH;
      positionY = closestObjects.pos[1] / Game.HEIGHT;
    }
    const activation = this.network.activate([type1, type2, positionX, positionY])[0];
    if (activation > 0) {
      this.isJumping = true;
    } else {
      this.isJumping = false;
    }
  }

  getNetwork() {
    return this.network;
  }
}

export default GeneticPlayer;
