import GameView from './game_view';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const width = window.innerWidth;
  const padding = 50;
  // const height = 500;
  // const width = 900;
  canvas.width = width - padding;
  canvas.height = (width / 2) - padding;
  const ctx = canvas.getContext('2d');
  const game = new Game(width - padding, (width / 2) - padding);
  new GameView(game, ctx).start();
});
