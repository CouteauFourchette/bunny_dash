import Game from './game';
import HumanPlayer from './players/human_player';
import BotPlayer from './players/bot_player';
import GeneticPlayer from './players/genetic_player';

class GameView {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.start = this.start.bind(this);
  }

  start() {
    this.bindKeys(false);

    let players = [];

    switch (this.mode) {
      case 'bot':
        players = [new BotPlayer(Game.BOXSIZE, Game.BOXSIZE, [Game.BOXSIZE * 3, (Game.HEIGHT - Game.FLOORSIZE - Game.BOXSIZE)])];
        break;
      case 'genetic':
        players = [new GeneticPlayer(Game.BOXSIZE, Game.BOXSIZE, [Game.BOXSIZE * 3, (Game.HEIGHT - Game.FLOORSIZE - Game.BOXSIZE)])];
        break;
      default:
        players = [new HumanPlayer(Game.BOXSIZE, Game.BOXSIZE, [Game.BOXSIZE * 5, (Game.HEIGHT - Game.FLOORSIZE - Game.BOXSIZE)], this.canvas)];
        break;
    }
    
    this.game = new Game(players);
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
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`Score: ${Math.round(this.score)}`, (Game.WIDTH - 250), 80);
    switch (this.mode) {
      case 'bot':
        this.ctx.fillText('AI Bot Mode', 150, 80);
        break;
      case 'genetic':
        this.ctx.fillText('Genetics Mode', 150, 80);
        break;
      default:
        this.ctx.fillText('Human Mode', 150, 80);
        break;
    }
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }


  gameOver() {
    this.bindKeys(true);
    this.ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    this.ctx.fillStyle = 'transparent';
    this.ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    this.ctx.fillStyle = 'white';
    this.ctx.font = '80px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Game Over', Game.WIDTH / 2, (Game.HEIGHT / 2) - 50);
    this.ctx.fillText(`Score: ${Math.round(this.score)}`, Game.WIDTH / 2, (Game.HEIGHT / 2) + 50);
    this.ctx.font = '50px Arial';
    this.ctx.fillText('Press Space or Click to start', Game.WIDTH / 2, (Game.HEIGHT / 2) + 150);
    this.ctx.font = '40px Arial';
    switch (this.mode) {
      case 'bot':
        this.ctx.fillText('AI Bot Mode', 150, 80);
        break;
      case 'genetic':
        this.ctx.fillText('Genetics Mode', 150, 80);
        break;
      default:
        this.ctx.fillText('Human Mode', 150, 80);
        break;
    }
  }

  bindKeys(on) {
    if (on) {
      this.canvas.addEventListener('mousedown', this.start);
      document.addEventListener('keydown', this.start);
      window.addEventListener('touchstart', this.start);
    } else {
      this.canvas.removeEventListener('mousedown', this.start);
      document.removeEventListener('keydown', this.start);
      window.removeEventListener('touchstart', this.start);
    }
  }
}

export default GameView;
