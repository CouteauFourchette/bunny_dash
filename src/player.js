class Player {
  constructor(width, height, initialPos) {
    this.width = width;
    this.height = height;
    this.pos = initialPos;
    this.speed = 0.5;
    this.jumpHeight = -1;
  }

  move() {
    if (this.jumpHeight !== -1) {
      if (this.pos[1] > this.jumpHeight) {
        this.speed = -1;
      } else {
        this.jumpHeight = -1;
        this.speed = 0.5;
      }
    }
    this.pos[1] += this.speed;
  }

  jump(jumpHeight) {
    if (this.speed === 0) {
      this.jumpHeight = jumpHeight;
    }
  }

  draw(ctx) {
    ctx.fillStyle = '#5DBCD2';
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}

export default Player;
