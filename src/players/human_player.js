import Player from './player';

class HumanPlayer extends Player {
  constructor(width, height, initialPos, canvas) {
    super(width, height, initialPos);
    this.canvas = canvas;
    this.bindKeys();
  }

  handleMouseClick(jump) {
    // if (this.game.over) {
    //   this.start();
    // } else {
      
    // }
    this.isJumping = jump;
  }

  handleKeyPress(e, jump) {
    if (e.keyCode === 32) {
      // if (this.game.over) {
      //   this.start();
      // } else {
        
      // }
      this.isJumping = jump;
    }
  }

  getAction() {}


  bindKeys() {
    this.canvas.addEventListener('mousedown', () => this.handleMouseClick(true));
    this.canvas.addEventListener('mouseup', () => this.handleMouseClick(false));
    document.addEventListener('keydown', e => this.handleKeyPress(e, true));
    document.addEventListener('keyup', e => this.handleKeyPress(e, false));
    window.addEventListener('touchstart', () => this.handleMouseClick(true));
    window.addEventListener('touchend', () => this.handleMouseClick(false));
  }
}

export default HumanPlayer;
