import Game from './game';

class GameView {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.game = new Game(canvas.width, (canvas.width / 2));
  }

  start() {
    this.game = undefined;
    this.game = new Game(this.canvas.width, (this.canvas.width / 2), this.bot);
    this.lastTime = 0;
    this.score = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    if (this.game.over) {
      this.gameOver();
      return;
    }
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.score += 0.1;
    this.ctx.fillStyle = 'white';
    this.ctx.font = '40px Arial';
    this.ctx.fillText(`Score: ${Math.round(this.score)}`, (this.game.width - 250), 80);
    if (this.bot) this.ctx.fillText('AI Bot Mode', 150, 80);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }

  handleMouseClick(jump) {
    if (this.game.over) {
      this.start();
    } else {
      this.game.jump = jump;
    }
  }

  handleKeyPress(e, jump) {
    if (e.keyCode === 32) {
      if (this.game.over) {
        this.start();
      } else {
        this.game.jump = jump;
      }
    }
  }

  bindKeys() {
    this.canvas.addEventListener('mousedown', () => this.handleMouseClick(true));
    this.canvas.addEventListener('mouseup', () => this.handleMouseClick(false));
    document.addEventListener('keydown', e => this.handleKeyPress(e, true));
    document.addEventListener('keyup', e => this.handleKeyPress(e, false));
    window.addEventListener('touchstart', () => this.handleMouseClick(true));
    window.addEventListener('touchend', () => this.handleMouseClick(false));
  }

  gameOver() {
    this.ctx.clearRect(0, 0, this.game.width, this.game.height);
    this.ctx.fillStyle = 'transparent';
    this.ctx.fillRect(0, 0, this.game.width, this.game.height);
    this.ctx.fillStyle = 'white';
    this.ctx.font = '80px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Game Over', this.game.width / 2, (this.game.height / 2) - 50);
    this.ctx.fillText(`Score: ${Math.round(this.score)}`, this.game.width / 2, (this.game.height / 2) + 50);
    this.ctx.font = '50px Arial';
    this.ctx.fillText(`Press Space or Click to start`, this.game.width / 2, (this.game.height / 2) + 150);
    this.ctx.font = '40px Arial';
    if (this.bot) this.ctx.fillText('AI Bot Mode', 150, 80);
  }
}

export default GameView;
