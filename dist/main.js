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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");



/***/ }),

/***/ "./src/scripts/attack.js":
/*!*******************************!*\
  !*** ./src/scripts/attack.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attack; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Attack = /*#__PURE__*/function () {
  function Attack(x, y, targetX, targetY, speed) {
    _classCallCheck(this, Attack);

    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.xVel = 0;
    this.yVel = 0;
    this.speed = speed;
  }

  _createClass(Attack, [{
    key: "move",
    value: function move() {
      var deltaX = Math.abs(this.targetX - this.x);
      var deltaY = Math.abs(this.targetY - this.y);
      var hypo = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      this.xVel = deltaX / hypo;
      this.yVel = deltaY / hypo;

      if (this.startX < this.targetX) {
        this.x += this.xVel * this.speed;
      }

      if (this.startX > this.targetX) {
        this.x -= this.xVel * this.speed;
      }

      if (this.startY < this.targetY) {
        this.y += this.yVel * this.speed;
      }

      if (this.startY > this.targetY) {
        this.y -= this.yVel * this.speed;
      }
    }
  }]);

  return Attack;
}();



/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function Enemy() {
  _classCallCheck(this, Enemy);

  this.x = Math.floor(Math.random() * 500);
  this.y = Math.floor(Math.random() * 500);
  this.interval = Math.floor(50 + Math.random() * 450);
  this.speed = Math.floor(2 + Math.random() * 3);
};



/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/scripts/enemy.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attack */ "./src/scripts/attack.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ "./src/scripts/timer.js");




document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  canvas.width = 500;
  canvas.height = 500;
  canvas.addEventListener('mousedown', movePlayer);
  setInterval(updateTime, 1000);
  setInterval(play, 1000 / 100); // e.clientX - canvas.offsetLeft // gives x coordinate of canvas
  // e.clientY - canvas.offsetTop // gives y coordinate of canvas

  var player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var timer = new _timer__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var mouseX = 250;
  var mouseY = 250;
  var gameOver = false;
  var enemy1 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemy2 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemy3 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemy4 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemy5 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
  var counter = 0;
  var attacks = [];

  function updateTime() {
    if (!gameOver) {
      timer.tick();
      document.getElementById("timer").innerHTML = timer.getTime();
    }
  }

  function movePlayer(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    var deltaX = Math.abs(mouseX - player.x);
    var deltaY = Math.abs(mouseY - player.y);
    var hypo = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    player.xVelocity = deltaX / hypo;
    player.yVelocity = deltaY / hypo;
  }

  function play() {
    if (!gameOver) {
      if (counter === 500) counter = 0;
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (player.x < mouseX) {
        player.x += player.xVelocity;
      }

      if (player.x > mouseX) {
        player.x -= player.xVelocity;
      }

      if (player.y < mouseY) {
        player.y += player.yVelocity;
      }

      if (player.y > mouseY) {
        player.y -= player.yVelocity;
      } // draw player


      ctx.beginPath();
      ctx.arc(player.x, player.y, 20, 0, 2 * Math.PI, true);
      ctx.strokeStyle = "green";
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.fillStyle = "blue";
      ctx.fill(); // draw each enemy

      enemies.forEach(function (enemy) {
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, 20, 0, 2 * Math.PI, true);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();

        if (enemy.interval === counter) {
          attacks.push(new _attack__WEBPACK_IMPORTED_MODULE_2__["default"](enemy.x, enemy.y, player.x, player.y, enemy.speed));
        }
      });
      attacks.forEach(function (attack) {
        attack.move();
        ctx.beginPath();
        ctx.arc(attack.x, attack.y, 10, 0, 2 * Math.PI, true);
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();
        var deltaX = Math.abs(attack.x - player.x);
        var deltaY = Math.abs(attack.y - player.y);
        if (deltaX <= 20 && deltaY <= 20) gameOver = true;
      });
      counter += 1;
    } else {
      document.getElementById("gameOver").innerHTML = "Game Over! <br /> Refresh the page to try again.";
    }
  }
});

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player() {
  _classCallCheck(this, Player);

  this.x = 250;
  this.y = 250;
  this.xVelocity = 0;
  this.yVelocity = 0;
};



/***/ }),

/***/ "./src/scripts/timer.js":
/*!******************************!*\
  !*** ./src/scripts/timer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.seconds = 0;
  }

  _createClass(Timer, [{
    key: "tick",
    value: function tick() {
      this.seconds++;
    }
  }, {
    key: "getTime",
    value: function getTime() {
      var seconds = this.seconds;
      var minutes = Math.floor(this.seconds / 60);
      var hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
      seconds = seconds % 60;

      if (seconds < 10) {
        seconds = "0".concat(seconds);
      }

      if (minutes < 10) {
        minutes = "0".concat(minutes);
      }

      if (hours < 10) {
        hours = "0".concat(hours);
      }

      return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    }
  }]);

  return Timer;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2F0dGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQXR0YWNrIiwieCIsInkiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInNwZWVkIiwic3RhcnRYIiwic3RhcnRZIiwieFZlbCIsInlWZWwiLCJkZWx0YVgiLCJNYXRoIiwiYWJzIiwiZGVsdGFZIiwiaHlwbyIsInNxcnQiLCJFbmVteSIsImZsb29yIiwicmFuZG9tIiwiaW50ZXJ2YWwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwibW92ZVBsYXllciIsInNldEludGVydmFsIiwidXBkYXRlVGltZSIsInBsYXkiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJ0aW1lciIsIlRpbWVyIiwibW91c2VYIiwibW91c2VZIiwiZ2FtZU92ZXIiLCJlbmVteTEiLCJlbmVteTIiLCJlbmVteTMiLCJlbmVteTQiLCJlbmVteTUiLCJlbmVtaWVzIiwiY291bnRlciIsImF0dGFja3MiLCJ0aWNrIiwiaW5uZXJIVE1MIiwiZ2V0VGltZSIsImUiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJ4VmVsb2NpdHkiLCJ5VmVsb2NpdHkiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImZvckVhY2giLCJlbmVteSIsInB1c2giLCJhdHRhY2siLCJtb3ZlIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJob3VycyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCQSxNO0FBQ2pCLGtCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLE9BQWxCLEVBQTJCQyxPQUEzQixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFBQTs7QUFDdkMsU0FBS0osQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0ksTUFBTCxHQUFjTCxDQUFkO0FBQ0EsU0FBS00sTUFBTCxHQUFjTCxDQUFkO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFm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O0FBQ04sVUFBSUEsT0FBTyxHQUFHLEtBQUtBLE9BQW5CO0FBQ0EsVUFBSUMsT0FBTyxHQUFHN0QsSUFBSSxDQUFDTSxLQUFMLENBQVcsS0FBS3NELE9BQUwsR0FBZSxFQUExQixDQUFkO0FBQ0EsVUFBSUUsS0FBSyxHQUFHOUQsSUFBSSxDQUFDTSxLQUFMLENBQVd1RCxPQUFPLEdBQUcsRUFBckIsQ0FBWjtBQUNBQSxhQUFPLEdBQUdBLE9BQU8sR0FBRyxFQUFwQjtBQUNBRCxhQUFPLEdBQUdBLE9BQU8sR0FBRyxFQUFwQjs7QUFFQSxVQUFJQSxPQUFPLEdBQUcsRUFBZCxFQUFrQjtBQUNkQSxlQUFPLGNBQU9BLE9BQVAsQ0FBUDtBQUNIOztBQUVELFVBQUlDLE9BQU8sR0FBRyxFQUFkLEVBQWtCO0FBQ2RBLGVBQU8sY0FBT0EsT0FBUCxDQUFQO0FBQ0g7O0FBRUQsVUFBSUMsS0FBSyxHQUFHLEVBQVosRUFBZ0I7QUFDWkEsYUFBSyxjQUFPQSxLQUFQLENBQUw7QUFDSDs7QUFFRCx1QkFBVUEsS0FBVixjQUFtQkQsT0FBbkIsY0FBOEJELE9BQTlCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCTDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zY3JpcHRzL2dhbWVcIlxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0YWNrIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB0YXJnZXRYLCB0YXJnZXRZLCBzcGVlZCkge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5zdGFydFggPSB4XG4gICAgICAgIHRoaXMuc3RhcnRZID0geVxuICAgICAgICB0aGlzLnRhcmdldFggPSB0YXJnZXRYXG4gICAgICAgIHRoaXMudGFyZ2V0WSA9IHRhcmdldFkgXG4gICAgICAgIHRoaXMueFZlbCA9IDBcbiAgICAgICAgdGhpcy55VmVsID0gMFxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWRcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIGxldCBkZWx0YVggPSBNYXRoLmFicyh0aGlzLnRhcmdldFggLSB0aGlzLngpXG4gICAgICAgIGxldCBkZWx0YVkgPSBNYXRoLmFicyh0aGlzLnRhcmdldFkgLSB0aGlzLnkpXG4gICAgICAgIGxldCBoeXBvID0gTWF0aC5zcXJ0KGRlbHRhWCpkZWx0YVggKyBkZWx0YVkqZGVsdGFZKVxuICAgICAgICB0aGlzLnhWZWwgPSBkZWx0YVggLyBoeXBvXG4gICAgICAgIHRoaXMueVZlbCA9IGRlbHRhWSAvIGh5cG8gXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRYIDwgdGhpcy50YXJnZXRYKSB7XG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy54VmVsICogdGhpcy5zcGVlZFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0WCA+IHRoaXMudGFyZ2V0WCkge1xuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMueFZlbCAqIHRoaXMuc3BlZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFydFkgPCB0aGlzLnRhcmdldFkpIHtcbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnlWZWwgKiB0aGlzLnNwZWVkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRZID4gdGhpcy50YXJnZXRZKSB7XG4gICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy55VmVsICogdGhpcy5zcGVlZFxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15e1xuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKVxuICAgICAgICB0aGlzLnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDApXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBNYXRoLmZsb29yKDUwICsgTWF0aC5yYW5kb20oKSAqIDQ1MClcbiAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGguZmxvb3IoMiArIE1hdGgucmFuZG9tKCkgKiAzKVxuICAgIH1cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IEF0dGFjayBmcm9tIFwiLi9hdHRhY2tcIjtcbmltcG9ydCBUaW1lciBmcm9tICcuL3RpbWVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gNTAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdmVQbGF5ZXIpXG4gICAgc2V0SW50ZXJ2YWwodXBkYXRlVGltZSwgMTAwMClcbiAgICBzZXRJbnRlcnZhbChwbGF5LCAxMDAwLzEwMCk7XG5cbiAgICAvLyBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdCAvLyBnaXZlcyB4IGNvb3JkaW5hdGUgb2YgY2FudmFzXG4gICAgLy8gZS5jbGllbnRZIC0gY2FudmFzLm9mZnNldFRvcCAvLyBnaXZlcyB5IGNvb3JkaW5hdGUgb2YgY2FudmFzXG5cbiAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcigpXG4gICAgbGV0IHRpbWVyID0gbmV3IFRpbWVyKClcbiAgICBsZXQgbW91c2VYID0gMjUwXG4gICAgbGV0IG1vdXNlWSA9IDI1MFxuICAgIGxldCBnYW1lT3ZlciA9IGZhbHNlIFxuXG4gICAgbGV0IGVuZW15MSA9IG5ldyBFbmVteSgpXG4gICAgbGV0IGVuZW15MiA9IG5ldyBFbmVteSgpXG4gICAgbGV0IGVuZW15MyA9IG5ldyBFbmVteSgpXG4gICAgbGV0IGVuZW15NCA9IG5ldyBFbmVteSgpXG4gICAgbGV0IGVuZW15NSA9IG5ldyBFbmVteSgpXG4gICAgXG4gICAgbGV0IGVuZW1pZXMgPSBbZW5lbXkxLCBlbmVteTIsIGVuZW15MywgZW5lbXk0LCBlbmVteTVdXG5cbiAgICBsZXQgY291bnRlciA9IDBcbiAgICBsZXQgYXR0YWNrcyA9IFtdXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lKCl7XG4gICAgICAgIGlmICghZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHRpbWVyLnRpY2soKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lclwiKS5pbm5lckhUTUwgPSB0aW1lci5nZXRUaW1lKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVQbGF5ZXIoZSkge1xuICAgICAgICBtb3VzZVggPSBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdFxuICAgICAgICBtb3VzZVkgPSBlLmNsaWVudFkgLSBjYW52YXMub2Zmc2V0VG9wXG4gICAgICAgIGxldCBkZWx0YVggPSBNYXRoLmFicyhtb3VzZVggLSBwbGF5ZXIueClcbiAgICAgICAgbGV0IGRlbHRhWSA9IE1hdGguYWJzKG1vdXNlWSAtIHBsYXllci55KVxuICAgICAgICBsZXQgaHlwbyA9IE1hdGguc3FydChkZWx0YVgqZGVsdGFYICsgZGVsdGFZKmRlbHRhWSlcbiAgICAgICAgcGxheWVyLnhWZWxvY2l0eSA9IGRlbHRhWCAvIGh5cG9cbiAgICAgICAgcGxheWVyLnlWZWxvY2l0eSA9IGRlbHRhWSAvIGh5cG9cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICBpZiAoY291bnRlciA9PT0gNTAwKSBjb3VudGVyID0gMDtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChwbGF5ZXIueCA8IG1vdXNlWCkge1xuICAgICAgICAgICAgICAgIHBsYXllci54Kz0gcGxheWVyLnhWZWxvY2l0eVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChwbGF5ZXIueCA+IG1vdXNlWCkge1xuICAgICAgICAgICAgICAgIHBsYXllci54LT0gcGxheWVyLnhWZWxvY2l0eSBcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAocGxheWVyLnkgPCBtb3VzZVkpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIueSs9IHBsYXllci55VmVsb2NpdHkgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYgKHBsYXllci55ID4gbW91c2VZKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnktPSBwbGF5ZXIueVZlbG9jaXR5IFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgLy8gZHJhdyBwbGF5ZXJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMocGxheWVyLngsIHBsYXllci55LCAyMCwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgLy8gZHJhdyBlYWNoIGVuZW15XG4gICAgICAgICAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKGVuZW15LngsIGVuZW15LnksIDIwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuaW50ZXJ2YWwgPT09IGNvdW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrcy5wdXNoKG5ldyBBdHRhY2soZW5lbXkueCwgZW5lbXkueSwgcGxheWVyLngsIHBsYXllci55LCBlbmVteS5zcGVlZCkpIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBhdHRhY2tzLmZvckVhY2goYXR0YWNrID0+IHtcbiAgICAgICAgICAgICAgICBhdHRhY2subW92ZSgpIFxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKGF0dGFjay54LCBhdHRhY2sueSwgMTAsIDAsIDIqTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGFYID0gTWF0aC5hYnMoYXR0YWNrLnggLSBwbGF5ZXIueClcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGFZID0gTWF0aC5hYnMoYXR0YWNrLnkgLSBwbGF5ZXIueSlcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFYIDw9IDIwICYmIGRlbHRhWSA8PSAyMCkgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gMVxuICAgICAgICB9IFxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lT3ZlclwiKS5pbm5lckhUTUwgPSBcIkdhbWUgT3ZlciEgPGJyIC8+IFJlZnJlc2ggdGhlIHBhZ2UgdG8gdHJ5IGFnYWluLlwiIFxuICAgICAgICB9XG5cbiAgICB9XG5cbn0pO1xuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAyNTAgXG4gICAgICAgIHRoaXMueSA9IDI1MCAgICBcbiAgICAgICAgdGhpcy54VmVsb2NpdHkgPSAwXG4gICAgICAgIHRoaXMueVZlbG9jaXR5ID0gMFxuICAgIH1cbn1cblxuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gMCBcbiAgICB9XG5cbiAgICB0aWNrKCkge1xuICAgICAgICB0aGlzLnNlY29uZHMrKyBcbiAgICB9XG5cbiAgICBnZXRUaW1lKCkge1xuICAgICAgICBsZXQgc2Vjb25kcyA9IHRoaXMuc2Vjb25kcyBcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMuc2Vjb25kcyAvIDYwKSBcbiAgICAgICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApIFxuICAgICAgICBtaW51dGVzID0gbWludXRlcyAlIDYwIFxuICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwIFxuXG4gICAgICAgIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgICAgIHNlY29uZHMgPSBgMCR7c2Vjb25kc31gXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgICAgICAgICBtaW51dGVzID0gYDAke21pbnV0ZXN9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXJzIDwgMTApIHtcbiAgICAgICAgICAgIGhvdXJzID0gYDAke2hvdXJzfWBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YFxuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9