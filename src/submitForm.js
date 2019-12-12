const velocity = require('./velocity');
const drawAxis = require('./drawAxis');
const drawUneven = require('./drawUneven');

function submitForm (ctx) {
  ctx.clearRect(0, 0, 2000, 2000);
  drawAxis(ctx, "Time", "Distance");
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