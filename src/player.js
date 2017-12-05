class Player {
  constructor(width, height, initialPos) {
    this.width = width;
    this.height = height;
    this.pos = initialPos;
    this.speed = (this.height / 6);
    this.jumpHeight = -1;
    this.ticksPerFrame = 5;
    this.tickCount = 0;
    this.frameIndex = 0;
    this.imageFrames = [];
    const imageSources = ['images/bunny/bunny1_walk1.png', 'images/bunny/bunny1_walk2.png', 'images/bunny/bunny1_jump.png'];
    for (let i = 0; i < 3; i += 1) {
      const image = new Image();
      image.src = imageSources[i];
      this.imageFrames.push(image);
    }
  }

  move(delta) {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.frameIndex = this.frameIndex === 0 ? 1 : 0;
      this.tickCount = 0;
    }
    if (this.jumpHeight !== -1) {
      if (this.pos[1] > this.jumpHeight) {
        this.speed = -(this.height / 6);
        this.frameIndex = 2;
      } else {
        this.jumpHeight = -1;
        this.speed = (this.height / 6);
      }
    }
    const velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
    const offsetY = this.speed * velocityScale;
    this.pos[1] += offsetY;
  }

  jump(jumpHeight) {
    if (this.speed === 0) {
      this.frameIndex = 3;
      this.tickCount = 0;
      this.jumpHeight = this.pos[1] - jumpHeight;
    }
  }

  draw(ctx) {
    const image = this.imageFrames[this.frameIndex];
    ctx.drawImage(image, this.pos[0], this.pos[1] - (this.height * 0.66), this.width, this.height * 1.66);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Player;
