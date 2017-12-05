class Floor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pos = [0, this.height * 4];
  }

  draw(ctx) {
    ctx.fillStyle = '#ccc';
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}

export default Floor;
