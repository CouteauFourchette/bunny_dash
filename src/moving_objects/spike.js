import MovingObject from './moving_object';

class Spike extends MovingObject {
  constructor(...args) {
    super(...args);
    this.y = this.pos[1] - (0.5 * this.height);
  }
  draw(ctx) {
    const image = new Image();
    image.src = 'dist/images/spikes/spikes_top.png';
    ctx.drawImage(image, this.pos[0], this.y, this.width * 1.5, this.height * 1.5);
  }
}

export default Spike;
