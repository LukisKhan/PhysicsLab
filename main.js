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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/acceleration.js":
/*!*****************************!*\
  !*** ./src/acceleration.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const particle = __webpack_require__(/*! ./particle */ "./src/particle.js");

function acceleration(ctx, particle) {
  // let particles = Array(1)
  //   .fill(true)
  //   .map(() => particle([0,100], [1,0], [.8,0]) )

  const updatePos = (particle) => {
    let { pos, vel, accel } = particle;
    pos = [pos[0] + vel[0], pos[1] + vel[1]]
    vel = [vel[0] + accel[0], vel[1] + accel[1]]
    // console.log(particle);
    return { ...particle, pos, vel };
  }
  const animate = () => {
    let animationId = requestAnimationFrame(animate);
    particle = updatePos(particle)
    let posX = particle.pos[0];
    let posY = particle.pos[1];
    ctx.beginPath();
    ctx.arc(posX, posY, 6, 0 * Math.PI, 2 * Math.PI, true);
    ctx.stroke();
    // ctx.fillText(`${posX}`, posX, posY);
    // if (particle.pos[0] > 700 || particle.pos[1] > 700) {
    //   cancelAnimationFrame(animationId);
    // }
  }
  animate()
}

// const log = (particleArray) => {
//   particleArray.forEach(particle => {
//     console.log(`x: ${particle.pos[0]} \ny: ${particle.pos[1]}`);
//   })
// }

module.exports = acceleration;

/***/ }),

/***/ "./src/displayWindow.js":
/*!******************************!*\
  !*** ./src/displayWindow.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const submitForm = __webpack_require__(/*! ./submitForm */ "./src/submitForm.js");
const submitAccelForm = __webpack_require__(/*! ./submitAccelForm */ "./src/submitAccelForm.js");
const drawAxis = __webpack_require__(/*! ./drawAxis */ "./src/drawAxis.js");

function displayWindow (canvas) {
  const topicList = document.querySelector('.topics');
  const topicWindows = document.querySelectorAll('.topic-window');
  let currentWindow = "velocity";
  let ctx = canvas.getContext("2d");
  drawAxis(ctx, width, height);
  topicList.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
      const topicClicked = document.querySelector(e.target.dataset.topic)
      topicWindows.forEach(topicWindow => {
        if (topicWindow == topicClicked) {
          topicWindow.classList.add('active');
          currentWindow = topicWindow.classList[1];
        } else {
          topicWindow.classList.remove('active');
        }
      })
      switch(currentWindow) {
        case "velocity":
          console.log("vel case");
          // ctx = canvas.getContext("2d");
          submitForm(ctx);
          break;
        case "acceleration":
          console.log("accel case");
          // ctx = canvas.getContext("2d");
          submitAccelForm(ctx);
          break;
        default:
          console.log("default case");
          // ctx = canvas.getContext("2d");
          submitForm(ctx);
      }
    }
  })
}

module.exports = displayWindow;

/***/ }),

/***/ "./src/drawAxis.js":
/*!*************************!*\
  !*** ./src/drawAxis.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const drawAxis = (ctx, width, height) => {
  ctx.lineWidth = 2;
  ctx.moveTo(50, 25);
  ctx.lineTo(50, 360);
  ctx.lineTo(760, 360);
  ctx.stroke();
  ctx.strokeText("0,0", 30, 370);
  ctx.strokeText(`${width}`, width - 50, 370);
  ctx.strokeText(`${height}`, 30, 30);

}
module.exports = drawAxis;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const displayWindow = __webpack_require__(/*! ./displayWindow */ "./src/displayWindow.js");

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.querySelector('canvas');
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;
  canvas.height = 400;
  canvas.width = 800;
  displayWindow(canvas, width = 800, height = 400);
})

/***/ }),

/***/ "./src/particle.js":
/*!*************************!*\
  !*** ./src/particle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



function particle (
  pos = [random(), random()],
  vel = [1, 1],
  accel = [0.5, 0.5]
  ){
  return {pos, vel, accel}
}

function random(min = 0, max = 50) {
  let randomNum = (Math.random() * (max - min) + min);
  return randomNum;
}

module.exports = particle

/***/ }),

/***/ "./src/submitAccelForm.js":
/*!********************************!*\
  !*** ./src/submitAccelForm.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const acceleration = __webpack_require__(/*! ./acceleration */ "./src/acceleration.js");

function submitAccelForm(ctx) {
  const inputForm = document.forms['inputs'];
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let particle = { pos: [], vel: [], accel: [] };
    const posValues = inputForm.querySelectorAll("#pos").forEach(valueNode => {
      // console.log(valueNode);
      particle.pos.push(parseInt(valueNode.value) || 0)
    });
    const velValues = inputForm.querySelectorAll("#vel").forEach(valueNode => {
      particle.vel.push(parseInt(valueNode.value) || 0)
    });
    const accelValues = inputForm.querySelectorAll("#accel").forEach(valueNode => {
      particle.accel.push(parseInt(valueNode.value) || 0)
    });
    ctx.clearRect(0, 0, 2000, 2000)
    acceleration(ctx, particle);
  })
}

// inputForm.querySelectorAll('input').forEach(input => {
//   if (input.id == "pos" || input.id == "vel" ) {
//     input.classList.add('active')
//   }
// })
module.exports = submitAccelForm;

/***/ }),

/***/ "./src/submitForm.js":
/*!***************************!*\
  !*** ./src/submitForm.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const velocity = __webpack_require__(/*! ./velocity */ "./src/velocity.js");

function submitForm (ctx) {
  const inputForm = document.forms['inputs'];
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let particle = {pos: [], vel: []};
    const posValues = inputForm.querySelectorAll("#pos").forEach(valueNode => {
      particle.pos.push(parseInt(valueNode.value) || 0)
    });
    const velValues = inputForm.querySelectorAll("#vel").forEach(valueNode => {
      particle.vel.push(parseInt(valueNode.value) || 0)
    });
    ctx.clearRect(0, 0, 2000, 2000)
    velocity(ctx, particle);
  })
}
module.exports = submitForm;

/***/ }),

/***/ "./src/velocity.js":
/*!*************************!*\
  !*** ./src/velocity.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const particle = __webpack_require__(/*! ./particle */ "./src/particle.js");

function velocity (ctx, particle) {
  const updatePos = (particle) => {
    let {pos, vel, accel }= particle;
    pos = [pos[0] + vel[0], pos[1] + vel[1]]
    return { ...particle, pos};
  }
  const animate = () => {
    let animationId = requestAnimationFrame(animate);
    particle = updatePos(particle)
    let posX = particle.pos[0];
    let posY = particle.pos[1];
    ctx.beginPath();
    ctx.arc(posX, posY, 12, 0 * Math.PI, 2 * Math.PI, true);
    ctx.stroke();
    // if (particle.pos[0] > 300 || particle.pos[1] > 300 ) {
    //   cancelAnimationFrame(animationId);
    // }
  }
  animate();
}


module.exports = velocity;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map