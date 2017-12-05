class Player {
  constructor(width, height, initialPos) {
    this.width = width;
    this.height = height;
    this.pos = initialPos;
    this.speed = 2;
    this.jumpHeight = -1;
    this.image = new Image();
    this.image.src = 'images/bunny1_walk1.png';
  }

  move() {
    if (this.jumpHeight !== -1) {
      if (this.pos[1] > this.jumpHeight) {
        this.speed = -3;
        this.image.src = 'images/bunny1_jump.png';
      } else {
        this.image.src = 'images/bunny1_walk1.png';
        this.jumpHeight = -1;
        this.speed = 3;
      }
    }
    this.pos[1] += this.speed;
  }

  jump(jumpHeight) {
    if (this.speed === 0) {
      this.image.src = 'images/bunny1_ready.png';
      this.jumpHeight = this.pos[1] - jumpHeight;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.pos[0], this.pos[1] - (this.height * 0.66), this.width, this.height * 1.66);
  }
}

export default Player;
