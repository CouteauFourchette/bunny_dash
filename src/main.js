import GameView from './game_view';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const width = 1680;
  canvas.width = width;
  canvas.height = (width / 2);
  const ctx = canvas.getContext('2d');
  const gameView = new GameView(ctx, canvas);
  gameView.start();

  const humanButton = document.getElementById('human');
  humanButton.addEventListener('click', () => {
    gameView.bot = false;
    gameView.game.over = true;
    gameView.gameOver();
    setTimeout(() => {
      gameView.start();
    }, 300);
  });

  const aiButton = document.getElementById('ai');
  aiButton.addEventListener('click', () => {
    gameView.bot = true;
    gameView.game.over = true;
    gameView.gameOver();
    setTimeout(() => {
      gameView.start();
    }, 300);
  });
});

window.onkeydown = (event) => {
  if (event.keyCode === 32) {
    event.preventDefault();
  }
};
