import Spring from './moving_objects/spring';
import Spike from './moving_objects/spike';
import Block from './moving_objects/block';


class LevelGenerator {
  static generate(boxSize, floorSize, width, height) {
    if (Math.random() > 0.997) {
      return new Spring(boxSize, boxSize, [width + (5 * boxSize), height - floorSize], (width / 150));
    } else if (Math.random() > 0.995) {
      return new Block(boxSize, boxSize, [width, height - (floorSize + boxSize)], (width / 150));
    } else if (Math.random() > 0.993) {
      return new Spike(boxSize / 3, boxSize * 0.3, [width, height - (floorSize + (boxSize * 0.3))], (width / 150));
    }
    return {};
  }
}

export default LevelGenerator;
