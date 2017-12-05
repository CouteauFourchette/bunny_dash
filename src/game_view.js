class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    if (this.game.over) {
      this.gameOver();
      return;
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  gameOver() {
    this.ctx.clearRect(0, 0, this.game.width, this.game.height);
    this.ctx.fillStyle = '#5DBCD2';
    this.ctx.fillRect(0, 0, this.game.width, this.game.height);
    this.ctx.fillStyle = 'white';
    this.ctx.font = '80px Arial';
    this.ctx.fillText('Game Over', (this.game.width / 3), 80);
  }
}

export default GameView;
