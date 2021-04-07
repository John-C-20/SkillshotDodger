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



document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  canvas.width = 500;
  canvas.height = 500;
  canvas.addEventListener('mousedown', movePlayer);
  setInterval(play, 1000 / 100); // e.clientX - canvas.offsetLeft // gives x coordinate of canvas
  // e.clientY - canvas.offsetTop // gives y coordinate of canvas

  var player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](); // player.x = 500
  // player.y = 500

  var mouseX = 250;
  var mouseY = 250;
  var enemy1 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemy2 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemy3 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemy4 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemy5 = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var enemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
  var counter = 0;
  var attacks = [];

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
      if (deltaX <= 20 && deltaY <= 20) alert('game over! refresh page to try again');
    });
    counter += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2F0dGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQXR0YWNrIiwieCIsInkiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInNwZWVkIiwic3RhcnRYIiwic3RhcnRZIiwieFZlbCIsInlWZWwiLCJkZWx0YVgiLCJNYXRoIiwiYWJzIiwiZGVsdGFZIiwiaHlwbyIsInNxcnQiLCJFbmVteSIsImZsb29yIiwicmFuZG9tIiwiaW50ZXJ2YWwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwibW92ZVBsYXllciIsInNldEludGVydmFsIiwicGxheSIsInBsYXllciIsIlBsYXllciIsIm1vdXNlWCIsIm1vdXNlWSIsImVuZW15MSIsImVuZW15MiIsImVuZW15MyIsImVuZW15NCIsImVuZW15NSIsImVuZW1pZXMiLCJjb3VudGVyIiwiYXR0YWNrcyIsImUiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJ4VmVsb2NpdHkiLCJ5VmVsb2NpdHkiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImZvckVhY2giLCJlbmVteSIsInB1c2giLCJhdHRhY2siLCJtb3ZlIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtR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Q0EsVUFBSVEsTUFBTSxJQUFJLEVBQVYsSUFBZ0JHLE1BQU0sSUFBSSxFQUE5QixFQUFrQ21ELEtBQUssQ0FBQyxzQ0FBRCxDQUFMO0FBQ3JDLEtBYkQ7QUFlQXpCLFdBQU8sSUFBSSxDQUFYO0FBQ0g7QUFFSixDQXJHRCxFOzs7Ozs7Ozs7Ozs7Ozs7O0lDSnFCVCxNLEdBQ2pCLGtCQUFjO0FBQUE7O0FBQ1YsT0FBSzdCLENBQUwsR0FBUyxHQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxPQUFLNEMsU0FBTCxHQUFpQixDQUFqQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDSCxDOzs7Ozs7Ozs7Ozs7OztBQ05MO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NjcmlwdHMvZ2FtZVwiXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRhY2sge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHRhcmdldFgsIHRhcmdldFksIHNwZWVkKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnN0YXJ0WCA9IHhcbiAgICAgICAgdGhpcy5zdGFydFkgPSB5XG4gICAgICAgIHRoaXMudGFyZ2V0WCA9IHRhcmdldFhcbiAgICAgICAgdGhpcy50YXJnZXRZID0gdGFyZ2V0WSBcbiAgICAgICAgdGhpcy54VmVsID0gMFxuICAgICAgICB0aGlzLnlWZWwgPSAwXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZFxuICAgIH1cblxuICAgIG1vdmUoKXtcbiAgICAgICAgbGV0IGRlbHRhWCA9IE1hdGguYWJzKHRoaXMudGFyZ2V0WCAtIHRoaXMueClcbiAgICAgICAgbGV0IGRlbHRhWSA9IE1hdGguYWJzKHRoaXMudGFyZ2V0WSAtIHRoaXMueSlcbiAgICAgICAgbGV0IGh5cG8gPSBNYXRoLnNxcnQoZGVsdGFYKmRlbHRhWCArIGRlbHRhWSpkZWx0YVkpXG4gICAgICAgIHRoaXMueFZlbCA9IGRlbHRhWCAvIGh5cG9cbiAgICAgICAgdGhpcy55VmVsID0gZGVsdGFZIC8gaHlwbyBcblxuICAgICAgICBpZiAodGhpcy5zdGFydFggPCB0aGlzLnRhcmdldFgpIHtcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnhWZWwgKiB0aGlzLnNwZWVkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRYID4gdGhpcy50YXJnZXRYKSB7XG4gICAgICAgICAgICB0aGlzLnggLT0gdGhpcy54VmVsICogdGhpcy5zcGVlZFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0WSA8IHRoaXMudGFyZ2V0WSkge1xuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMueVZlbCAqIHRoaXMuc3BlZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFydFkgPiB0aGlzLnRhcmdldFkpIHtcbiAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnlWZWwgKiB0aGlzLnNwZWVkXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXl7XG4gICAgY29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDApXG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMClcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IE1hdGguZmxvb3IoNTAgKyBNYXRoLnJhbmRvbSgpICogNDUwKVxuICAgICAgICB0aGlzLnNwZWVkID0gTWF0aC5mbG9vcigyICsgTWF0aC5yYW5kb20oKSAqIDMpXG4gICAgfVxufSIsImltcG9ydCBFbmVteSBmcm9tICcuL2VuZW15JztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgQXR0YWNrIGZyb20gXCIuL2F0dGFja1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSA1MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW92ZVBsYXllcilcbiAgICBzZXRJbnRlcnZhbChwbGF5LCAxMDAwLzEwMCk7XG5cbiAgICAvLyBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdCAvLyBnaXZlcyB4IGNvb3JkaW5hdGUgb2YgY2FudmFzXG4gICAgLy8gZS5jbGllbnRZIC0gY2FudmFzLm9mZnNldFRvcCAvLyBnaXZlcyB5IGNvb3JkaW5hdGUgb2YgY2FudmFzXG5cbiAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcigpXG4gICAgLy8gcGxheWVyLnggPSA1MDBcbiAgICAvLyBwbGF5ZXIueSA9IDUwMFxuICAgIGxldCBtb3VzZVggPSAyNTBcbiAgICBsZXQgbW91c2VZID0gMjUwXG5cbiAgICBsZXQgZW5lbXkxID0gbmV3IEVuZW15KClcbiAgICBsZXQgZW5lbXkyID0gbmV3IEVuZW15KClcbiAgICBsZXQgZW5lbXkzID0gbmV3IEVuZW15KClcbiAgICBsZXQgZW5lbXk0ID0gbmV3IEVuZW15KClcbiAgICBsZXQgZW5lbXk1ID0gbmV3IEVuZW15KClcbiAgICBcbiAgICBsZXQgZW5lbWllcyA9IFtlbmVteTEsIGVuZW15MiwgZW5lbXkzLCBlbmVteTQsIGVuZW15NV1cblxuICAgIGxldCBjb3VudGVyID0gMFxuICAgIGxldCBhdHRhY2tzID0gW11cblxuICAgIGZ1bmN0aW9uIG1vdmVQbGF5ZXIoZSkge1xuICAgICAgICBtb3VzZVggPSBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdFxuICAgICAgICBtb3VzZVkgPSBlLmNsaWVudFkgLSBjYW52YXMub2Zmc2V0VG9wXG4gICAgICAgIGxldCBkZWx0YVggPSBNYXRoLmFicyhtb3VzZVggLSBwbGF5ZXIueClcbiAgICAgICAgbGV0IGRlbHRhWSA9IE1hdGguYWJzKG1vdXNlWSAtIHBsYXllci55KVxuICAgICAgICBsZXQgaHlwbyA9IE1hdGguc3FydChkZWx0YVgqZGVsdGFYICsgZGVsdGFZKmRlbHRhWSlcbiAgICAgICAgcGxheWVyLnhWZWxvY2l0eSA9IGRlbHRhWCAvIGh5cG9cbiAgICAgICAgcGxheWVyLnlWZWxvY2l0eSA9IGRlbHRhWSAvIGh5cG9cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICBpZiAoY291bnRlciA9PT0gNTAwKSBjb3VudGVyID0gMDtcbiAgICBcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgICAgIGlmIChwbGF5ZXIueCA8IG1vdXNlWCkge1xuICAgICAgICAgICAgcGxheWVyLngrPSBwbGF5ZXIueFZlbG9jaXR5XG4gICAgICAgIH0gXG4gICAgICAgIGlmIChwbGF5ZXIueCA+IG1vdXNlWCkge1xuICAgICAgICAgICAgcGxheWVyLngtPSBwbGF5ZXIueFZlbG9jaXR5IFxuICAgICAgICB9IFxuICAgICAgICBpZiAocGxheWVyLnkgPCBtb3VzZVkpIHtcbiAgICAgICAgICAgIHBsYXllci55Kz0gcGxheWVyLnlWZWxvY2l0eSBcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKHBsYXllci55ID4gbW91c2VZKSB7XG4gICAgICAgICAgICBwbGF5ZXIueS09IHBsYXllci55VmVsb2NpdHkgXG4gICAgICAgIH0gXG4gICAgICAgIFxuXG4gICAgICAgIC8vIGRyYXcgcGxheWVyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwbGF5ZXIueCwgcGxheWVyLnksIDIwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG5cbiAgICAgICAgLy8gZHJhdyBlYWNoIGVuZW15XG4gICAgICAgIGVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGVuZW15LngsIGVuZW15LnksIDIwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGlmIChlbmVteS5pbnRlcnZhbCA9PT0gY291bnRlcikge1xuICAgICAgICAgICAgICAgIGF0dGFja3MucHVzaChuZXcgQXR0YWNrKGVuZW15LngsIGVuZW15LnksIHBsYXllci54LCBwbGF5ZXIueSwgZW5lbXkuc3BlZWQpKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhdHRhY2tzLmZvckVhY2goYXR0YWNrID0+IHtcbiAgICAgICAgICAgIGF0dGFjay5tb3ZlKCkgXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGF0dGFjay54LCBhdHRhY2sueSwgMTAsIDAsIDIqTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGxldCBkZWx0YVggPSBNYXRoLmFicyhhdHRhY2sueCAtIHBsYXllci54KVxuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IE1hdGguYWJzKGF0dGFjay55IC0gcGxheWVyLnkpXG4gICAgICAgICAgICBpZiAoZGVsdGFYIDw9IDIwICYmIGRlbHRhWSA8PSAyMCkgYWxlcnQoJ2dhbWUgb3ZlciEgcmVmcmVzaCBwYWdlIHRvIHRyeSBhZ2FpbicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvdW50ZXIgKz0gMVxuICAgIH1cblxufSk7XG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMueCA9IDI1MCBcbiAgICAgICAgdGhpcy55ID0gMjUwICAgIFxuICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IDBcbiAgICAgICAgdGhpcy55VmVsb2NpdHkgPSAwXG4gICAgfVxufVxuXG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=