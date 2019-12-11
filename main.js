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
  // don't draw axis until topic has been picked
  // drawAxis(ctx, width, height);
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

const drawAxis = (ctx, xAxis = "Time", yAxis = "Distance", width = 400, height = 400) => {
  ctx.lineWidth = 1;
  ctx.moveTo(50, 50);
  // 0,0 origin is at 50, 360
  // end origin is at 360, 25
  // grid is 350 px by 350px starting at 50, 400 (0,0) and ends at 400, 50
  ctx.lineTo(50, height / (height / 350) + 50 );
  ctx.lineTo(width / (width / 350) + 50 , height / (height / 350) + 50);
  ctx.stroke();
  ctx.lineWidth = 0.5;
  for(let i = 1; i < 35; i ++) {
    ctx.moveTo(50, 400 - (10 * i));
    ctx.lineTo(400, 400 - (10 * i));
  }
  for (let j = 1; j < 35; j++) {
    ctx.moveTo(50 + (10 * j), 50);
    ctx.lineTo(50 + (10 * j), 400);
  }
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeText("0,0", 30, 420);
  ctx.strokeText(`${width}`, 400, 420);
  ctx.strokeText(`${height}`, 30, 50);
  ctx.strokeText(`${xAxis}`, 200, 420);
  ctx.strokeText(`${yAxis}`, 5, 200);
  
}

module.exports = drawAxis;

/***/ }),

/***/ "./src/drawUneven.js":
/*!***************************!*\
  !*** ./src/drawUneven.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const drawUneven = (ctx) => {
  ctx.strokeText("UNEVEN AXISES", 180, 460);
}

module.exports = drawUneven;

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
  canvas.height = 500;
  canvas.width = 500;
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
  const inputForm = document.forms['accel-inputs'];
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
const drawAxis = __webpack_require__(/*! ./drawAxis */ "./src/drawAxis.js");
const drawUneven = __webpack_require__(/*! ./drawUneven */ "./src/drawUneven.js");

function submitForm (ctx) {
  ctx.clearRect(0, 0, 2000, 2000);
  drawAxis(ctx, "Time", "Distance", 800, 800);
  const inputForm = document.forms['vel-inputs'];
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let particle = {pos: [], vel: []};
    const posValues = inputForm.querySelectorAll("#pos").forEach(valueNode => {
      particle.pos.push(parseInt(valueNode.value) || 0)
    });
    const velValues = inputForm.querySelectorAll("#vel").forEach(valueNode => {
      particle.vel.push(parseInt(valueNode.value) || 0)
    });
    let distance = inputForm.elements.distance.value;
    let time = inputForm.elements.time.value;
    let vel = inputForm.elements.velocity.value;

    let velocityAns = distance / time;
    // console.log(velocityAns, "velocity")
    particle = { pos: [50, 400], vel: [1,-velocityAns]}
    if( velocityAns * 10 > 350) {
      ctx.clearRect(0, 0, 2000, 2000);
      drawAxis(ctx, "Time", "Distance", 10, velocityAns * 10);
      drawUneven(ctx);
      velocity(ctx, particle, 10, velocityAns * 10);
    } else if (1/velocityAns * 10 > 350) {
      ctx.clearRect(0, 0, 2000, 2000);
      particle.vel = [velocityAns, -1];
      drawAxis(ctx, "Time", "Distance", 1/velocityAns * 10, 10);
      drawUneven(ctx);
      velocity(ctx, particle, 1/velocityAns * 10, 10)
    }
    else {
      ctx.clearRect(0, 0, 2000, 2000);
      drawAxis(ctx, "Time", "Distance", 400, 400);
      velocity(ctx, particle);
    }
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

function velocity (ctx, particle, maxX = 400, maxY = 400) {
  // console.log(particle)
  const updatePos = (particle) => {
    let {pos, vel, accel }= particle;
    //if Y values are so large, zoom out on Y-axis, zoom in to x-axis
    if(maxY > 400) {
      pos = [pos[0] + (vel[0] / 10) * 350 , pos[1] + (vel[1] / maxY) * 350 ];
    } else if (maxX > 400) {
      pos = [pos[0] + (1/vel[0] / maxX) * 350, pos[1] + (vel[1] / 10) * 350];
    }
    else {
      pos = [pos[0] + vel[0], pos[1] + vel[1]];
    }
    return { ...particle, pos};
  }
  const animate = () => {
    let animationId = requestAnimationFrame(animate);
    let prevPos = particle.pos;
    // console.log("prevPos", prevPos);
    particle = updatePos(particle)
    let posX = particle.pos[0];
    let posY = particle.pos[1];
    // console.log("currentPos", particle.pos);
    ctx.moveTo(prevPos[0], prevPos[1]);
    ctx.lineTo(particle.pos[0], particle.pos[1]);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(posX, posY, 2, 0 * Math.PI, 2 * Math.PI, true);
    ctx.stroke();
    // ctx.lineTo(prevPos);
    if (particle.pos[0] > 399 || particle.pos[1] < 51 ) {
      cancelAnimationFrame(animationId);
    }
  }
  animate();
}


module.exports = velocity;

//onclick even bound to LI instead of submit button
//particle properties
//dynamic width and height
//intuitive input
//clear out input values when switching between forms

/***/ })

/******/ });
//# sourceMappingURL=main.js.map