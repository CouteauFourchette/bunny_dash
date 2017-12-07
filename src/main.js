import GameView from './game_view';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const width = window.innerWidth;
  // const height = 500;
  // const width = 900;
  canvas.width = width;
  canvas.height = (width / 2);
  const ctx = canvas.getContext('2d');
  const gameView = new GameView(ctx, canvas);
  gameView.bindKeys(canvas);
  gameView.start();
});