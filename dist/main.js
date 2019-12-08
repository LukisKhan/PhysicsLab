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

eval("const particle = __webpack_require__(/*! ./particle */ \"./src/particle.js\");\n\nfunction velocity(ctx, particle) {\n  // let particles = Array(1)\n  //   .fill(true)\n  //   .map(() => particle([0,100], [1,0], [.8,0]) )\n\n  const updatePos = (particle) => {\n    let { pos, vel, accel } = particle;\n    pos = [pos[0] + vel[0], pos[1] + vel[1]]\n    vel = [vel[0] + accel[0], vel[1] + accel[1]]\n    console.log(particle);\n    return { ...particle, pos, vel };\n  }\n  const animate = () => {\n    let animationId = requestAnimationFrame(animate);\n    particle = updatePos(particle)\n    let posX = particle.pos[0];\n    let posY = particle.pos[1];\n    ctx.beginPath();\n    ctx.arc(posX, posY, 6, 0 * Math.PI, 2 * Math.PI, true);\n    ctx.stroke();\n    if (particle.pos[0] > 300 || particle.pos[1] > 300) {\n      cancelAnimationFrame(animationId);\n    }\n  }\n  animate()\n}\n\n// const log = (particleArray) => {\n//   particleArray.forEach(particle => {\n//     console.log(`x: ${particle.pos[0]} \\ny: ${particle.pos[1]}`);\n//   })\n// }\n\nmodule.exports = velocity;\n\n//# sourceURL=webpack:///./src/acceleration.js?");

/***/ }),

/***/ "./src/displayWindow.js":
/*!******************************!*\
  !*** ./src/displayWindow.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const submitForm = __webpack_require__(/*! ./submitForm */ \"./src/submitForm.js\");\nconst submitAccelForm = __webpack_require__(/*! ./submitAccelForm */ \"./src/submitAccelForm.js\");\n\nfunction displayWindow (canvas) {\n  const topicList = document.querySelector('.topics');\n  const topicWindows = document.querySelectorAll('.topic-window');\n  let currentWindow = \"\";\n  let ctx;\n  topicList.addEventListener('click', function (e) {\n    if (e.target.tagName == 'LI') {\n      const topicClicked = document.querySelector(e.target.dataset.topic)\n      topicWindows.forEach(topicWindow => {\n        if (topicWindow == topicClicked) {\n          topicWindow.classList.add('active');\n          currentWindow = topicWindow.classList[1];\n        } else {\n          topicWindow.classList.remove('active');\n        }\n      })\n      switch(currentWindow) {\n        case \"velocity\":\n          ctx = canvas.getContext(\"2d\");\n          submitForm(ctx);\n          break;\n        case \"acceleration\":\n          ctx = canvas.getContext(\"2d\");\n          submitAccelForm(ctx);\n          break;\n        default:\n          submitAccelForm(ctx);\n      }\n    }\n  })\n}\n\nmodule.exports = displayWindow;\n\n//# sourceURL=webpack:///./src/displayWindow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const displayWindow = __webpack_require__(/*! ./displayWindow */ \"./src/displayWindow.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let canvas = document.querySelector('canvas');\n  canvas.height = window.innerHeight/2;\n  canvas.width = window.innerWidth/2;\n  displayWindow(canvas);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/particle.js":
/*!*************************!*\
  !*** ./src/particle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction particle (\n  pos = [random(), random()],\n  vel = [1, 1],\n  accel = [0.5, 0.5]\n  ){\n  return {pos, vel, accel}\n}\n\nfunction random(min = 0, max = 50) {\n  let randomNum = (Math.random() * (max - min) + min);\n  return randomNum;\n}\n\nmodule.exports = particle\n\n//# sourceURL=webpack:///./src/particle.js?");

/***/ }),

/***/ "./src/submitAccelForm.js":
/*!********************************!*\
  !*** ./src/submitAccelForm.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const acceleration = __webpack_require__(/*! ./acceleration */ \"./src/acceleration.js\");\n\nfunction submitAccelForm(ctx) {\n  const inputForm = document.forms['inputs'];\n  inputForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    let particle = { pos: [], vel: [], accel: [] };\n    const posValues = inputForm.querySelectorAll(\"#pos\").forEach(valueNode => {\n      console.log(valueNode);\n      particle.pos.push(parseInt(valueNode.value) || 0)\n    });\n    const velValues = inputForm.querySelectorAll(\"#vel\").forEach(valueNode => {\n      particle.vel.push(parseInt(valueNode.value) || 0)\n    });\n    const accelValues = inputForm.querySelectorAll(\"#accel\").forEach(valueNode => {\n      particle.accel.push(parseInt(valueNode.value) || 0)\n    });\n    ctx.clearRect(0, 0, 400, 400)\n    acceleration(ctx, particle);\n  })\n}\n\n// inputForm.querySelectorAll('input').forEach(input => {\n//   if (input.id == \"pos\" || input.id == \"vel\" ) {\n//     input.classList.add('active')\n//   }\n// })\nmodule.exports = submitAccelForm;\n\n//# sourceURL=webpack:///./src/submitAccelForm.js?");

/***/ }),

/***/ "./src/submitForm.js":
/*!***************************!*\
  !*** ./src/submitForm.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const velocity = __webpack_require__(/*! ./velocity */ \"./src/velocity.js\");\n\nfunction submitForm (ctx) {\n  const inputForm = document.forms['inputs'];\n  inputForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    let particle = {pos: [], vel: []};\n    const posValues = inputForm.querySelectorAll(\"#pos\").forEach(valueNode => {\n      console.log(valueNode);\n      particle.pos.push(parseInt(valueNode.value) || 0)\n    });\n    const velValues = inputForm.querySelectorAll(\"#vel\").forEach(valueNode => {\n      particle.vel.push(parseInt(valueNode.value) || 0)\n    });\n    ctx.clearRect(0, 0, 400, 400)\n    velocity(ctx, particle);\n  })\n}\nmodule.exports = submitForm;\n\n//# sourceURL=webpack:///./src/submitForm.js?");

/***/ }),

/***/ "./src/velocity.js":
/*!*************************!*\
  !*** ./src/velocity.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const particle = __webpack_require__(/*! ./particle */ \"./src/particle.js\");\n\nfunction velocity (ctx, particle) {\n  const updatePos = (particle) => {\n    let {pos, vel, accel }= particle;\n    pos = [pos[0] + vel[0], pos[1] + vel[1]]\n    return { ...particle, pos};\n  }\n  const animate = () => {\n    let animationId = requestAnimationFrame(animate);\n    particle = updatePos(particle)\n    let posX = particle.pos[0];\n    let posY = particle.pos[1];\n    ctx.beginPath();\n    ctx.arc(posX, posY, 6, 0 * Math.PI, 2 * Math.PI, true);\n    ctx.stroke();\n    if (particle.pos[0] > 300 || particle.pos[1] > 300 ) {\n      cancelAnimationFrame(animationId);\n    }\n  }\n  animate()\n}\n\n\nmodule.exports = velocity;\n\n//# sourceURL=webpack:///./src/velocity.js?");

/***/ })

/******/ });