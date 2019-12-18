const acceleration = require('./acceleration');
const drawAxis = require('./drawAxis');
const drawUneven = require('./drawUneven');

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