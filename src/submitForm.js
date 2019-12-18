const velocity = require('./velocity');
const drawAxis = require('./drawAxis');
const drawUneven = require('./drawUneven');

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