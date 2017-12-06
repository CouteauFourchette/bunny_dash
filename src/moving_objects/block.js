import MovingObject from './moving_object';

class Block extends MovingObject {
  constructor(...args) {
    super(...args);
    this.image = new Image();
    const groundImages = ['images/ground/ground_cake_small_broken.png', 'images/ground/ground_grass_small_broken.png', 'images/ground/ground_sand_small_broken.png'];
    this.image.src = groundImages[Math.floor(Math.random() * groundImages.length)];
  }
  draw(ctx) {
    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
  }
}

export default Block;
