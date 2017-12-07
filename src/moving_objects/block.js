import MovingObject from './moving_object';

class Block extends MovingObject {
  constructor(...args) {
    super(...args);
    this.image = new Image();
    const groundImages = ['dist/images/ground/ground_cake_small_broken.png', 'dist/images/ground/ground_grass_small_broken.png', 'dist/images/ground/ground_sand_small_broken.png'];
    this.image.src = groundImages[Math.floor(Math.random() * groundImages.length)];
    this.y = Math.floor(this.pos[1]);
  }
  draw(ctx) {
    ctx.drawImage(this.image, Math.floor(this.pos[0]), this.y, this.width, this.height);
  }
}

export default Block;
