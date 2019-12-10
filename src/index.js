const displayWindow = require('./displayWindow');

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.querySelector('canvas');
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;
  canvas.height = 400;
  canvas.width = 800;
  displayWindow(canvas, width = 800, height = 400);
})