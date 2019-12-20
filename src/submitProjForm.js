const projectile = require('./projectile');
const drawAxis = require('./drawAxis');
// const drawUneven = require('./drawUneven');

function submitProjForm(ctx) {
  ctx.clearRect(0, 0, 2000, 2000);
  drawAxis(ctx);
  const inputForm = document.forms['accel-inputs'];
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // projectile(ctx, particle, accelAns);
  })
}

module.exports = submitProjForm;