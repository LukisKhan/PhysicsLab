const projectile = require('./projectile');
const drawAxis = require('./drawAxis');
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
      vel: [3, 60], 
      accel: [0, -10], 
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