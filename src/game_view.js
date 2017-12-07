class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.score = 0;
  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.score += 0.1;
    this.ctx.fillStyle = 'white';
    this.ctx.font = '20px Arial';
    this.ctx.fillText(`Score: ${Math.round(this.score)}`, (this.game.width - 150), 80);
    this.lastTime = time;
    if (this.game.over) {
      this.gameOver();
      return;
    }
    requestAnimationFrame(this.animate.bind(this));
  }


  bindKeys(canvas) {
    canvas.addEventListener('mousedown', () => this.game.jump = true, false);
    canvas.addEventListener('mouseup', () => this.game.jump = false, false);
    document.addEventListener('keydown', (e) => { if (e.keyCode === 32) this.game.jump = true; });
    document.addEventListener('keyup', (e) => { if (e.keyCode === 32) this.game.jump = false; });
    window.addEventListener('touchstart', () => this.game.jump = true);
    window.addEventListener('touchend', () => this.game.jump = false);
  }

  gameOver() {
    this.ctx.clearRect(0, 0, this.game.width, this.game.height);
    this.ctx.fillStyle = '#5DBCD2';
    this.ctx.fillRect(0, 0, this.game.width, this.game.height);
    this.ctx.fillStyle = 'white';
    this.ctx.font = '80px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Game Over', this.game.width / 2, (this.game.height / 2) - 50);
    this.ctx.fillText(`Score: ${Math.round(this.score)}`, this.game.width / 2, (this.game.height / 2) + 50);
  }
}

export default GameView;
