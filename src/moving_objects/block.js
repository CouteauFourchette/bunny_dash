import MovingObject from './moving_object';

class Block extends MovingObject {
  draw(ctx) {
    ctx.fillStyle = '#ccc';
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}

export default Block;
