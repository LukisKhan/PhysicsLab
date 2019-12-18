const displayWindow = require('./displayWindow');

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.querySelector('canvas');
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;
  canvas.height = 450;
  canvas.width = 600;
  displayWindow(canvas);
})