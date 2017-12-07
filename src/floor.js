class Floor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pos = [0, this.height * 4];
    this.image = new Image();
    this.image.src = 'dist/images/floor2.png';
    this.x = 0;
  }

  draw(ctx) {
    this.x += this.width / 150;
    if (this.x > 745) this.x = 0;
    ctx.drawImage(this.image, this.x, 0, this.width, this.height, this.pos[0], this.pos[1], this.width, (this.height * 2));
  }
}

export default Floor;
