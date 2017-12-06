import Spring from './moving_objects/spring';
import Spike from './moving_objects/spike';
import Block from './moving_objects/block';
import LevelClusters from './level_clusters';


class LevelGenerator {
  constructor(boxSize, floorSize, width, height) {
    this.boxSize = boxSize;
    this.floorSize = floorSize;
    this.width = width;
    this.height = height;
    this.step = 0;
    this.nextSpawn = 100;
  }

  setNextSpawn(int) {
    this.nextSpawn = int;
  }

  generate() {
    this.step += 1;
    if (this.step > this.nextSpawn) {
      this.step = 0;
      const clusterFunction = LevelClusters[Math.floor(Math.random() * LevelClusters.length)].bind(this);
      return clusterFunction();
    }
    return [];
  }

  generateItem(type, position) {
    const {
      boxSize,
      floorSize,
      width,
      height,
    } = this;

    switch (type) {
      case 'spring':
        return new Spring(boxSize, boxSize, [width + (position * boxSize), height - floorSize], (width / 150));
      case 'block_low':
        return new Block(boxSize, boxSize, [width + (position * boxSize), height - (floorSize + boxSize)], (width / 150));
      case 'block_mid':
        return new Block(boxSize, boxSize, [width + (position * boxSize), height - (floorSize + 2 * boxSize)], (width / 150));
      case 'block_high':
        return new Block(boxSize, boxSize, [width + (position * boxSize), height - (floorSize + 3 * boxSize)], (width / 150));
      case 'spike':
        return new Spike(boxSize / 2, boxSize * 0.4, [width + (position * boxSize), height - (floorSize + (boxSize * 0.4))], (width / 150));
      default:
        return {};
    }
  }
}

export default LevelGenerator;
