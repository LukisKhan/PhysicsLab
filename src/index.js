const displayWindow = require('./displayWindow');

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.querySelector('canvas');
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;
  canvas.height = 500;
  canvas.width = 500;
  displayWindow(canvas, width = 800, height = 400);
})