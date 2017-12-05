import MovingObject from './moving_object';

class Spring extends MovingObject {
  draw(ctx) {
    ctx.fillStyle = '#eee';
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}

export default Spring;
