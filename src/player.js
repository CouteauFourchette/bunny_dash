class Player {
  constructor(width, height, initialPos) {
    this.width = width;
    this.height = height;
    this.pos = initialPos;
    this.speed = 0.1;
    this.jump = false;
  }

  move() {
    if (this.jump) {
      if (this.pos[1] > 200) {
        this.speed -= this.speed;
      } else {
        this.jump = false;
      }
    }
    this.pos[1] += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = '#5DBCD2';
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}

export default Player;
