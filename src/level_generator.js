import Spring from './moving_objects/spring';
import Spike from './moving_objects/spike';
import Block from './moving_objects/block';


class LevelGenerator {
  static generate(boxSize, floorSize, width, height) {
    if (Math.random() > 0.995) {
      return new Spring(boxSize, boxSize, [width + (5 * boxSize), height - floorSize]);
    } else if (Math.random() > 0.993) {
      return new Block(boxSize, boxSize, [width, height - (floorSize + boxSize)]);
    } else if (Math.random() > 0.991) {
      return new Spike(boxSize / 3, boxSize * 0.3, [width, height - (floorSize + (boxSize * 0.3))]);
    }
    return {};
  }
}

export default LevelGenerator;
