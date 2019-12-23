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

function acceleration(ctx, particle, actualAccel, maxX = 400, maxY = 400) {
  // let particles = Array(1)
  //   .fill(true)
  //   .map(() => particle([0,100], [1,0], [.8,0]) )
  const startVel = particle.vel[1];
  const updatePos = (particle) => {
    let { pos, vel, accel } = particle;
    pos = [pos[0] + vel[0], pos[1] - vel[1]]
    vel = [vel[0], vel[1] + accel[1]]
    // console.log(particle);
    return { ...particle, pos, vel };
  }
  const toScaleX = (num, maxX = 350) => {
    return ((num - 100) / 350 * maxX).toFixed(1);
  }
  const toScaleY = (num, maxY = 350) => {
    return ((400 - num) / 350 * maxY).toFixed(1);
  }
  const animate = () => {
    let animationId = requestAnimationFrame(animate);
    let prevPos = particle.pos;
    particle = updatePos(particle)
    let posX = particle.pos[0];
    let posY = particle.pos[1];
    ctx.moveTo(prevPos[0], prevPos[1]);
    ctx.lineTo(particle.pos[0], particle.pos[1]);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(posX, posY, 1, 0 * Math.PI, 2 * Math.PI, true);
    ctx.stroke();
    ctx.clearRect(440, 0, 200, 400);
    let actualX = toScaleX(posX, maxX);
    let actualY = toScaleY(posY, maxY);
    ctx.font = "15px Arial"
    ctx.fillText(`Distance: ${actualY} (m/s)`, 460, 100);
    ctx.fillText(`Time: ${actualX} (s)`, 460, 130);
    ctx.fillText(`Start vel: ${startVel} (m/s)`, 460, 160);
    ctx.fillText(`End vel: ${particle.vel[1]} (m/s)`, 460, 190);
    ctx.fillText(`Accel: ${actualAccel} (m/s)`, 460, 220);
    ctx.font = "20px Arial"
    if (particle.pos[0] > 449 || particle.pos[1] < 51) {
      cancelAnimationFrame(animationId);
    }
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
const submitProjForm = __webpack_require__(/*! ./submitProjForm */ "./src/submitProjForm.js");
const drawAxis = __webpack_require__(/*! ./drawAxis */ "./src/drawAxis.js");

function displayWindow (canvas) {
  const topicList = document.querySelector('.topics');
  const topicWindows = document.querySelectorAll('.topic-window');
  const equation = document.getElementById('equation');
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
          console.log(topicClicked);
          equation.innerText = `${currentWindow}`;
        } else {
          topicWindow.classList.remove('active');
        }
      });
      switch(currentWindow) {
        case "velocity":
          console.log("vel case");
          ctx.clearRect(0, 0, 2000, 2000);
          submitForm(ctx);
          break;
        case "acceleration":
          console.log("accel case");
          ctx.clearRect(0, 0, 2000, 2000);
          submitAccelForm(ctx);
          break;
        case "projectile":
          console.log("projectile case");
          ctx.clearRect(0, 0, 2000, 2000);
          submitProjForm(ctx);
          break;
        default:
          console.log("default case");
          ctx.clearRect(0, 0, 2000, 2000);
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

const drawAxis = (ctx, xAxis = "Time (s)", yAxis = "Distance", width = 400, height = 400) => {
  ctx.font = "20px Arial";
  ctx.lineWidth = 1;
  ctx.moveTo(100, 50);
  // 0,0 origin is at 50, 360
  // end origin is at 360, 25
  // grid is 350 px by 350px starting at 100, 400 (0,0) and ends at 450, 50
  ctx.lineTo(100, height / (height / 350) + 50 );
  ctx.lineTo(width / (width / 350) + 100 , height / (height / 350) + 50);
  ctx.stroke();
  ctx.lineWidth = 0.5;
  for(let i = 1; i < 10; i ++) {
    ctx.moveTo(100, 400 - (35 * i));
    ctx.lineTo(450, 400 - (35 * i));
  }
  for (let j = 1; j < 10; j++) {
    ctx.moveTo(100 + (35 * j), 50);
    ctx.lineTo(100 + (35 * j), 400);
  }
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.fillText("0,0", 80, 420);
  ctx.fillText(`${width}`, 450, 420);
  ctx.fillText(`${height}`, 80, 50);
  ctx.fillText(`${xAxis}`, 250, 420);
  ctx.fillText(`${yAxis}`, 5, 200);
  ctx.fillText("(m)", 30, 230);
  
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
  ctx.strokeText("UNEVEN AXISES", 180, 440);
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
  canvas.height = 450;
  canvas.width = 600;
  displayWindow(canvas);
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
  accel = [0, 0]
  ){
  return {pos, vel, accel}
}

function random(min = 0, max = 450) {
  let randomNum = (Math.random() * (max - min) + min);
  return randomNum;
}

module.exports = particle

/***/ }),

/***/ "./src/projectile.js":
/*!***************************!*\
  !*** ./src/projectile.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const particle = __webpack_require__(/*! ./particle */ "./src/particle.js");

function projectile(ctx, particle, maxX = 400, maxY = 400) {
  const toScaleX = (num, maxX = 350) => {
    return ((num - 100) / 350 * maxX).toFixed(1);
  }
  const toScaleY = (num, maxY = 350) => {
    return ((400 - num) / 350 * maxY).toFixed(1);
  }

  //helper method for chooseEquation, 
  //return true if equation is solvable based on known variables
  const allButOne = (...variables) => {
    let numUnknown = 0;
    (variables).forEach((ele) => {
      if(!ele && ele !== 0) numUnknown++;
    });
    return numUnknown === 1;
  }

  //Choose euqation to solve if all variables are known except 1;
  const chooseEquation = (particle) => {
    let { initVel, finalVel, distance, height, accelInput, time } = particle;
    if (allButOne(finalVel, initVel, accelInput, time)) {
      console.log(firstEquation(finalVel, initVel, accelInput, time));
    }
  }

  const firstEquation = (Vf, Vi, a, t) => {
    if(!Vf) {
      console.log("Final Velocity");
      return Vi + a * t;
    } else if(!Vi) {
      console.log("Initial Velocity");
      return Vf - a * t;
    } else if (!a) {
      console.log("Acceleration");
      return (Vf - Vi) / t;
    } else {
      console.log("Time");
      return (Vf - Vi) / a;
    }
  }
  
  chooseEquation(particle);
///////Animate after solving
  const updatePos = (particle) => {

  }

  const animate = () => {

  }
  animate()
}
//EQUATIONS
// Vf = Vi + at
// X = ((Vf + Vi) / 2) * t
// X = Vi * t + (1/2 * a * tt)
// Vf2 = Vi2 + (2 * a * X)

module.exports = projectile;

/***/ }),

/***/ "./src/submitAccelForm.js":
/*!********************************!*\
  !*** ./src/submitAccelForm.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const acceleration = __webpack_require__(/*! ./acceleration */ "./src/acceleration.js");
const drawAxis = __webpack_require__(/*! ./drawAxis */ "./src/drawAxis.js");
const drawUneven = __webpack_require__(/*! ./drawUneven */ "./src/drawUneven.js");

function submitAccelForm(ctx) {
  ctx.clearRect(0, 0, 2000, 2000);
  drawAxis(ctx);
  const inputForm = document.forms['accel-inputs'];
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let vel = parseInt(document.getElementsByClassName("accel-window-vel")[0].value);
    let time = parseInt(document.getElementsByClassName("accel-window-time")[0].value);
    let accelAns = vel / time;
    let particle = { pos: [100, 400], vel: [1, vel] , accel: [1, accelAns] };

    ctx.clearRect(0, 0, 2000, 2000)
    drawAxis(ctx, undefined, undefined, 400, 400);
    acceleration(ctx, particle, accelAns);
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
  drawAxis(ctx);
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


    let velocityAns = distance / time;
    // inputForm.elements.velocity.value = velocityAns;
    // console.log(velocityAns, "velocity")
    particle = { pos: [100, 400], vel: [1,-velocityAns]}
    if( velocityAns * 10 > 350) {
      ctx.clearRect(0, 0, 2000, 2000);
      drawAxis(ctx, undefined, undefined, 10, velocityAns * 10);
      drawUneven(ctx);
      velocity(ctx, particle, velocityAns, 10, velocityAns * 10);
    } else if (1/velocityAns * 10 > 350) {
      ctx.clearRect(0, 0, 2000, 2000);
      particle.vel = [velocityAns, -1];
      drawAxis(ctx, undefined, undefined, 1/velocityAns * 10, 10);
      drawUneven(ctx);
      velocity(ctx, particle, velocityAns, 1 / velocityAns * 10, 10)
    }
    else {
      ctx.clearRect(0, 0, 2000, 2000);
      drawAxis(ctx, undefined, undefined, 400, 400);
      velocity(ctx, particle, velocityAns);
    }
  })
}
module.exports = submitForm;

/***/ }),

/***/ "./src/submitProjForm.js":
/*!*******************************!*\
  !*** ./src/submitProjForm.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
const drawAxis = __webpack_require__(/*! ./drawAxis */ "./src/drawAxis.js");
// const drawUneven = require('./drawUneven');

function submitProjForm(ctx) {
  ctx.clearRect(0, 0, 2000, 2000);
  drawAxis(ctx);
  const inputForm = document.forms['projectile-inputs'];
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const initVel = parseFloat(document.getElementById('projectile-window-init-vel').value);
    const finalVel = parseFloat(document.getElementById('projectile-window-final-vel').value);
    const distance = parseFloat(document.getElementById('projectile-window-distance').value);
    const height = parseFloat(document.getElementById('projectile-window-height').value);
    const accelInput = parseFloat(document.getElementById('projectile-window-accel').value);
    const time = parseFloat(document.getElementById('projectile-window-time').value);
    let particle = { 
      pos: [100, 400], 
      vel: [0, 0], 
      accel: [0, 0], 
      initVel,
      finalVel,
      distance,
      height,
      accelInput,
      time
    };
    // ctx.clearRect(0, 0, 2000, 2000)
    // drawAxis(ctx, undefined, undefined, 400, 400);
    // console.log(particle);
    projectile(ctx, particle);
  })
}

module.exports = submitProjForm;

/***/ }),

/***/ "./src/velocity.js":
/*!*************************!*\
  !*** ./src/velocity.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const particle = __webpack_require__(/*! ./particle */ "./src/particle.js");

function velocity(ctx, particle, actualVel, maxX = 400, maxY = 400) {
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
  // const pytha = (num1, num2) => {
  //   let pythaNum = Math.sqrt(num1 * num1 + num2* num2);
  //   return pythaNum;
  // }
  const toScaleX = (num, maxX = 350) => {
    return ((num - 100) / 350 * maxX).toFixed(1);
  }
  const toScaleY = (num, maxY = 350) => {
    return ((400 - num) / 350 * maxY).toFixed(1);
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
    ctx.arc(posX, posY, 1, 0 * Math.PI, 2 * Math.PI, true);
    ctx.stroke();
    ctx.clearRect(440, 0, 200, 400);
    let actualX = toScaleX(posX, maxX);
    let actualY = toScaleY(posY, maxY);
    ctx.font = "15px Arial"
    ctx.fillText(`Distance: ${actualY} (m)`, 460, 100);
    ctx.fillText(`Time: ${actualX} (s)`, 460, 130);
    ctx.fillText(`Velocity: ${actualVel} (m/s)`, 460, 160);
    ctx.font = "20px Arial"
    if (particle.pos[0] > 449 || particle.pos[1] < 51 ) {
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