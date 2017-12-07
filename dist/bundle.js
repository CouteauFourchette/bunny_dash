/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function () {
  function MovingObject(width, height, initialPos, speed) {
    _classCallCheck(this, MovingObject);

    this.width = width;
    this.height = height;
    this.pos = initialPos;
    this.speed = speed;
  }

  _createClass(MovingObject, [{
    key: 'move',
    value: function move(delta) {
      var velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
      var offsetX = this.speed * velocityScale;
      this.pos[0] -= offsetX;
    }

    // Overwrite this

  }, {
    key: 'draw',
    value: function draw(ctx) {
      ctx.fillStyle = '#ccc';
      ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
  }]);

  return MovingObject;
}();

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

exports.default = MovingObject;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spring = function (_MovingObject) {
  _inherits(Spring, _MovingObject);

  function Spring() {
    var _ref;

    _classCallCheck(this, Spring);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Spring.__proto__ || Object.getPrototypeOf(Spring)).call.apply(_ref, [this].concat(args)));

    _this.on = false;
    _this.image = new Image();
    _this.springImages = ['dist/images/spring/spring_in.png', 'dist/images/spring/spring_out.png'];
    _this.smallY = _this.pos[1] - _this.height / 2;
    return _this;
  }

  _createClass(Spring, [{
    key: 'draw',
    value: function draw(ctx) {
      if (this.on) {
        this.image.src = this.springImages[1];
        ctx.drawImage(this.image, this.pos[0], this.smallY, this.width, this.height);
      } else {
        this.image.src = this.springImages[0];
        ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height / 2);
      }
    }
  }]);

  return Spring;
}(_moving_object2.default);

exports.default = Spring;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spike = function (_MovingObject) {
  _inherits(Spike, _MovingObject);

  function Spike() {
    var _ref;

    _classCallCheck(this, Spike);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Spike.__proto__ || Object.getPrototypeOf(Spike)).call.apply(_ref, [this].concat(args)));

    _this.y = _this.pos[1] - 0.5 * _this.height;
    return _this;
  }

  _createClass(Spike, [{
    key: 'draw',
    value: function draw(ctx) {
      var image = new Image();
      image.src = 'dist/images/spikes/spikes_top.png';
      ctx.drawImage(image, this.pos[0], this.y, this.width * 1.5, this.height * 1.5);
    }
  }]);

  return Spike;
}(_moving_object2.default);

exports.default = Spike;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block = function (_MovingObject) {
  _inherits(Block, _MovingObject);

  function Block() {
    var _ref;

    _classCallCheck(this, Block);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Block.__proto__ || Object.getPrototypeOf(Block)).call.apply(_ref, [this].concat(args)));

    _this.image = new Image();
    var groundImages = ['dist/images/ground/ground_cake_small_broken.png', 'dist/images/ground/ground_grass_small_broken.png', 'dist/images/ground/ground_sand_small_broken.png'];
    _this.image.src = groundImages[Math.floor(Math.random() * groundImages.length)];
    _this.y = Math.floor(_this.pos[1]);
    return _this;
  }

  _createClass(Block, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.drawImage(this.image, Math.floor(this.pos[0]), this.y, this.width, this.height);
    }
  }]);

  return Block;
}(_moving_object2.default);

exports.default = Block;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game_view = __webpack_require__(5);

var _game_view2 = _interopRequireDefault(_game_view);

var _game = __webpack_require__(6);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('canvas');
  var width = window.innerWidth;
  var padding = 0;
  // const height = 500;
  // const width = 900;
  canvas.width = width - padding;
  canvas.height = width / 2 - padding;
  var ctx = canvas.getContext('2d');
  var game = new _game2.default(width - padding, width / 2 - padding);
  var gameView = new _game_view2.default(game, ctx);
  gameView.bindKeys(canvas);
  gameView.start();
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = game;
    this.score = 0;
  }

  _createClass(GameView, [{
    key: 'start',
    value: function start() {
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: 'animate',
    value: function animate(time) {
      var timeDelta = time - this.lastTime;
      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      this.score += 0.1;
      this.ctx.fillStyle = 'white';
      this.ctx.font = '20px Arial';
      this.ctx.fillText('Score: ' + Math.round(this.score), this.game.width - 150, 80);
      this.lastTime = time;
      if (this.game.over) {
        this.gameOver();
        return;
      }
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: 'bindKeys',
    value: function bindKeys(canvas) {
      var _this = this;

      canvas.addEventListener('mousedown', function () {
        return _this.game.jump = true;
      }, false);
      canvas.addEventListener('mouseup', function () {
        return _this.game.jump = false;
      }, false);
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === 32) _this.game.jump = true;
      });
      document.addEventListener('keyup', function (e) {
        if (e.keyCode === 32) _this.game.jump = false;
      });
      window.addEventListener('touchstart', function () {
        return _this.game.jump = true;
      });
      window.addEventListener('touchend', function () {
        return _this.game.jump = false;
      });
    }
  }, {
    key: 'gameOver',
    value: function gameOver() {
      this.ctx.clearRect(0, 0, this.game.width, this.game.height);
      this.ctx.fillStyle = '#5DBCD2';
      this.ctx.fillRect(0, 0, this.game.width, this.game.height);
      this.ctx.fillStyle = 'white';
      this.ctx.font = '80px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Game Over', this.game.width / 2, this.game.height / 2 - 50);
      this.ctx.fillText('Score: ' + Math.round(this.score), this.game.width / 2, this.game.height / 2 + 50);
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _floor = __webpack_require__(7);

var _floor2 = _interopRequireDefault(_floor);

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _spring = __webpack_require__(1);

var _spring2 = _interopRequireDefault(_spring);

var _spike = __webpack_require__(2);

var _spike2 = _interopRequireDefault(_spike);

var _block = __webpack_require__(3);

var _block2 = _interopRequireDefault(_block);

var _level_generator = __webpack_require__(9);

var _level_generator2 = _interopRequireDefault(_level_generator);

var _util = __webpack_require__(11);

var Util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(width, height) {
    _classCallCheck(this, Game);

    this.width = width;
    this.height = height;
    this.floorSize = this.height / 5;
    this.boxSize = this.height / 10;
    this.LevelGenerator = new _level_generator2.default(this.boxSize, this.floorSize, this.width, this.height);
    this.spikes = [];
    this.boxes = [];
    this.springs = [];
    this.player = new _player2.default(this.boxSize, this.boxSize, [this.width / 5, this.height - this.floorSize - this.boxSize]);
    this.floor = new _floor2.default(this.width, this.floorSize);
    this.over = false;
    this.jump = false;
  }

  _createClass(Game, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.fillStyle = Game.BG_COLOR;
      ctx.fillRect(0, 0, this.width, this.height);

      this.floor.draw(ctx);

      this.movingObjects().forEach(function (object) {
        object.draw(ctx);
      });

      this.player.draw(ctx);
    }
  }, {
    key: 'movingObjects',
    value: function movingObjects() {
      return [].concat(this.boxes, this.springs, this.spikes);
    }
  }, {
    key: 'spawn',
    value: function spawn() {
      var _this = this;

      var objects = this.LevelGenerator.generate();
      objects.forEach(function (object) {
        switch (object.constructor) {
          case _spike2.default:
            _this.spikes.push(object);
            break;
          case _block2.default:
            _this.boxes.push(object);
            break;
          case _spring2.default:
            _this.springs.push(object);
            break;
          default:
            break;
        }
      });
    }
  }, {
    key: 'step',
    value: function step(delta) {
      this.checkCollisions();
      if (this.jump) this.player.jump(this.height * 0.20);
      this.move(delta);
      this.spawn();
    }
  }, {
    key: 'move',
    value: function move(delta) {
      var _this2 = this;

      var objects = this.movingObjects();
      objects.forEach(function (object) {
        object.move(delta);
        if (object.pos[0] < -_this2.boxSize) {
          _this2.remove(object);
        }
      });
      this.floor.move(delta);
      this.player.move(delta);
    }
  }, {
    key: 'remove',
    value: function remove(object) {
      var spikeIndex = this.spikes.indexOf(object);
      if (spikeIndex > -1) {
        var index = spikeIndex;
        this.spikes.splice(index, 1);
        return;
      }
      var boxIndex = this.boxes.indexOf(object);
      if (boxIndex > -1) {
        var _index = boxIndex;
        this.boxes.splice(_index, 1);
        return;
      }
      var springIndex = this.springs.indexOf(object);
      if (springIndex > -1) {
        var _index2 = springIndex;
        this.springs.splice(_index2, 1);
      }
    }
  }, {
    key: 'checkCollisions',
    value: function checkCollisions() {
      switch (this.checkBoxCollisions()) {
        case 'top':
          this.player.speed = 0;
          this.player.pos[1] = Math.round(this.player.pos[1] / this.boxSize) * this.boxSize;
          break;
        case 'side':
          this.over = true;
          break;
        default:
          this.player.speed = this.boxSize / 7;
          break;
      }
      if (this.checkFloorCollision()) {
        this.player.speed = 0;
        this.player.pos[1] = Math.round(this.player.pos[1] / this.boxSize) * this.boxSize;
      }
      if (this.checkSpikeCollisions() !== 'none') {
        this.over = true;
      }
      if (this.checkSpringCollisions() === 'top') {
        this.player.jump(this.height * 0.30);
      }
    }
  }, {
    key: 'checkSpikeCollisions',
    value: function checkSpikeCollisions() {
      for (var i = 0; i < this.spikes.length; i += 1) {
        var spike = this.spikes[i];
        if (spike.pos[0] > this.player.pos[0] + this.boxSize) return 'none';
        if (Util.checkCollision(this.player, spike) !== 'none') {
          return 'collision';
        }
      }
      return 'none';
    }
  }, {
    key: 'checkSpringCollisions',
    value: function checkSpringCollisions() {
      for (var i = 0; i < this.springs.length; i += 1) {
        var spring = this.springs[i];
        if (Util.checkCollision(this.player, spring) === 'top') {
          spring.on = true;
          return 'top';
        }
      }
      return 'none';
    }
  }, {
    key: 'checkFloorCollision',
    value: function checkFloorCollision() {
      if (Util.checkCollision(this.player, this.floor) === 'top') {
        return true;
      }
      return false;
    }
  }, {
    key: 'checkBoxCollisions',
    value: function checkBoxCollisions() {
      for (var i = 0; i < this.boxes.length; i += 1) {
        var box = this.boxes[i];

        switch (Util.checkCollision(this.player, box)) {
          case 'side':
            return 'side';
          case 'top':
            return 'top';
          default:
            break;
        }
      }
      return 'none';
    }
  }]);

  return Game;
}();

Game.ROWS = 10;
Game.COLUMNS = 60;
Game.BG_COLOR = '#5DBCD2';

exports.default = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Floor = function () {
  function Floor(width, height) {
    _classCallCheck(this, Floor);

    this.width = width;
    this.height = height;
    this.pos = [0, this.height * 4];
    this.image = new Image();
    this.image.src = 'dist/images/floor2.png';
    this.x = 0;
  }

  _createClass(Floor, [{
    key: 'move',
    value: function move(delta) {
      var velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
      var offsetX = this.width / 150 * velocityScale;
      this.x += offsetX;
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      if (this.x > 745) this.x = 0;
      ctx.drawImage(this.image, this.x, 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height * 2);
    }
  }]);

  return Floor;
}();

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

exports.default = Floor;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(width, height, initialPos) {
    _classCallCheck(this, Player);

    this.width = width;
    this.height = height;
    this.pos = initialPos;
    this.speed = this.height / 6;
    this.jumpHeight = -1;
    this.ticksPerFrame = 5;
    this.tickCount = 0;
    this.frameIndex = 0;
    this.imageFrames = [];
    var imageSources = ['dist/images/bunny/bunny1_walk1.png', 'dist/images/bunny/bunny1_walk2.png', 'dist/images/bunny/bunny1_jump.png'];
    for (var i = 0; i < 3; i += 1) {
      var image = new Image();
      image.src = imageSources[i];
      this.imageFrames.push(image);
    }
  }

  _createClass(Player, [{
    key: 'move',
    value: function move(delta) {
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
          this.speed = this.height / 6;
        }
      }
      var velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
      var offsetY = this.speed * velocityScale;
      this.pos[1] += offsetY;
    }
  }, {
    key: 'jump',
    value: function jump(jumpHeight) {
      if (this.speed === 0) {
        this.frameIndex = 3;
        this.tickCount = 0;
        this.jumpHeight = this.pos[1] - jumpHeight;
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var image = this.imageFrames[this.frameIndex];
      ctx.drawImage(image, this.pos[0], this.pos[1] - this.height * 0.66, this.width, this.height * 1.66);
    }
  }]);

  return Player;
}();

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

exports.default = Player;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spring = __webpack_require__(1);

var _spring2 = _interopRequireDefault(_spring);

var _spike = __webpack_require__(2);

var _spike2 = _interopRequireDefault(_spike);

var _block = __webpack_require__(3);

var _block2 = _interopRequireDefault(_block);

var _level_clusters = __webpack_require__(10);

var _level_clusters2 = _interopRequireDefault(_level_clusters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LevelGenerator = function () {
  function LevelGenerator(boxSize, floorSize, width, height) {
    _classCallCheck(this, LevelGenerator);

    this.boxSize = boxSize;
    this.floorSize = floorSize;
    this.width = width;
    this.height = height;
    this.step = 0;
    this.nextSpawn = 100;
  }

  _createClass(LevelGenerator, [{
    key: 'setNextSpawn',
    value: function setNextSpawn(int) {
      this.nextSpawn = int;
    }
  }, {
    key: 'generate',
    value: function generate() {
      this.step += 1;
      if (this.step > this.nextSpawn) {
        this.step = 0;
        var clusterFunction = _level_clusters2.default[Math.floor(Math.random() * _level_clusters2.default.length)].bind(this);
        return clusterFunction();
      }
      return [];
    }
  }, {
    key: 'generateItem',
    value: function generateItem(type, position) {
      var boxSize = this.boxSize,
          floorSize = this.floorSize,
          width = this.width,
          height = this.height;


      switch (type) {
        case 'spring':
          return new _spring2.default(boxSize, boxSize, [width + position * boxSize, height - floorSize], width / 150);
        case 'block_low':
          return new _block2.default(boxSize, boxSize, [width + position * boxSize, height - (floorSize + boxSize)], width / 150);
        case 'block_mid':
          return new _block2.default(boxSize, boxSize, [width + position * boxSize, height - (floorSize + 2 * boxSize)], width / 150);
        case 'block_high':
          return new _block2.default(boxSize, boxSize, [width + position * boxSize, height - (floorSize + 3 * boxSize)], width / 150);
        case 'spike':
          return new _spike2.default(boxSize / 2, boxSize * 0.4, [width + position * boxSize, height - (floorSize + boxSize * 0.4)], width / 150);
        default:
          return {};
      }
    }
  }]);

  return LevelGenerator;
}();

exports.default = LevelGenerator;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function springAndJump() {
  var _this = this;

  var numberOfJumps = Math.ceil(Math.random() * 6);
  this.setNextSpawn(numberOfJumps * 50);
  var springs = [this.generateItem('spring', 0)];
  var spikes = [].concat(_toConsumableArray(Array(numberOfJumps * 4).keys())).map(function (pos) {
    return _this.generateItem('spike', pos + 2);
  });
  var blocks = [].concat(_toConsumableArray(Array(numberOfJumps).keys())).map(function (pos) {
    return _this.generateItem('block_mid', pos * 4 + 3);
  });
  return [].concat(springs, spikes, blocks);
}

function springTrap() {
  var _this2 = this;

  this.setNextSpawn(150);
  var springs = [this.generateItem('spring', 0)];
  var spikes = [4].map(function (pos) {
    return _this2.generateItem('spike', pos);
  });
  return [].concat(springs, spikes);
}

function jumpAndJump() {
  var _this3 = this;

  this.setNextSpawn(200);
  var lowBlock = [this.generateItem('block_low', 0)];
  var midBlock = [this.generateItem('block_mid', 3)];
  var highBlocks = [6, 10, 14].map(function (pos) {
    return _this3.generateItem('block_high', pos);
  });
  var spikes = [].concat(_toConsumableArray(Array(15).keys())).map(function (pos) {
    return _this3.generateItem('spike', pos + 1);
  });
  return [].concat(lowBlock, midBlock, highBlocks, spikes);
}

function easySpikeJump() {
  var _this4 = this;

  this.setNextSpawn(200);
  var blocks = [1, 2, 3, 7, 8, 9, 10, 14].map(function (pos) {
    return _this4.generateItem('block_low', pos);
  });
  var spikes = [4, 5, 6, 11, 12, 13].map(function (pos) {
    return _this4.generateItem('spike', pos);
  });
  return [].concat(blocks, spikes);
}

function alternateJump() {
  var _this5 = this;

  var numberOfBlocks = Math.ceil(Math.random() * 5);
  this.setNextSpawn(50 * numberOfBlocks);
  var lowBlocks = [].concat(_toConsumableArray(Array(numberOfBlocks * 4).keys())).map(function (pos) {
    return _this5.generateItem('block_low', pos);
  });
  var midBlocks = [].concat(_toConsumableArray(Array(numberOfBlocks - 1).keys())).map(function (pos) {
    return _this5.generateItem('block_mid', pos * 4 + 3);
  });
  return [].concat(lowBlocks, midBlocks);
}

function springOverSpikes() {
  var _this6 = this;

  this.setNextSpawn(200);
  var spring = [this.generateItem('spring', 0)];
  var spikes = [1, 2, 3, 5, 6, 7].map(function (pos) {
    return _this6.generateItem('spike', pos);
  });
  var block = [this.generateItem('block_low', 4)];
  return [].concat(spring, spikes, block);
}

var Clusters = [springAndJump, springTrap, jumpAndJump, easySpikeJump, alternateJump, springOverSpikes];

exports.default = Clusters;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCollision = checkCollision;
function checkCollision(objectA, objectB) {
  var xDistance = objectA.pos[0] + objectA.width / 2 - (objectB.pos[0] + objectB.width / 2);
  var yDistance = objectA.pos[1] + objectA.height / 2 - (objectB.pos[1] + objectB.height / 2);
  var width = (objectA.width + objectB.width) / 2;
  var height = (objectA.height + objectB.height) / 2;

  if (Math.abs(xDistance) <= width && Math.abs(yDistance) <= height) {
    if (Math.abs(xDistance) / width * 0.93 > Math.abs(yDistance) / height) {
      return 'side';
    }
    return 'top';
  }
  return 'none';
}

/***/ })
/******/ ]);