class Block {
  constructor(width, height, initialPos, speed = 2) {
    this.width = width;
    this.height = height;
    this.pos = initialPos;
    this.speed = speed;
  }

  move() {
    this.pos[0] -= this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = '#ccc';
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}

export default Block;
