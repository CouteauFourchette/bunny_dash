class Floor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pos = [0, this.height * 4];
    this.image = new Image();
    this.image.src = 'dist/images/floor2.png';
    this.x = 0;
  }

  move(delta) {
    const velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
    const offsetX = (this.width / 150) * velocityScale;
    this.x += offsetX;
  }

  draw(ctx) {
    if (this.x > 735) this.x = 0;
    ctx.drawImage(this.image, this.x, 0, this.width, this.height, this.pos[0], this.pos[1], this.width, (this.height * 2));
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Floor;
