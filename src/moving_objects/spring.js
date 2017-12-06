import MovingObject from './moving_object';

class Spring extends MovingObject {
  constructor(...args) {
    super(...args);
    this.on = false;
    this.image = new Image();
    this.springImages = ['images/spring/spring_in.png', 'images/spring/spring_out.png'];
  }
  draw(ctx) {
    if (this.on) {
      this.image.src = this.springImages[1];
      ctx.drawImage(this.image, this.pos[0], this.pos[1] - (this.height / 2), this.width, this.height);
    } else {
      this.image.src = this.springImages[0];
      ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height / 2);
    }
  }
}

export default Spring;
