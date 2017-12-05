class MovingObject {
  constructor(width, height, initialPos, speed) {
    this.width = width;
    this.height = height;
    this.pos = initialPos;
    this.speed = speed;
  }

  move(delta) {
    const velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
    const offsetX = this.speed * velocityScale;
    this.pos[0] -= offsetX;
  }

  // Overwrite this
  draw(ctx) {
    ctx.fillStyle = '#ccc';
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default MovingObject;
