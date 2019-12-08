const displayWindow = require('./displayWindow');

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.querySelector('canvas');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  displayWindow(canvas);
})