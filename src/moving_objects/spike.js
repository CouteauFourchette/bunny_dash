import MovingObject from './moving_object';

class Spike extends MovingObject {
  draw(ctx) {
    ctx.fillStyle = '#228f13';
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}

export default Spike;
