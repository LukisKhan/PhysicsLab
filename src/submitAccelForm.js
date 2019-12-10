const acceleration = require('./acceleration');

function submitAccelForm(ctx) {
  const inputForm = document.forms['inputs'];
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let particle = { pos: [], vel: [], accel: [] };
    const posValues = inputForm.querySelectorAll("#pos").forEach(valueNode => {
      // console.log(valueNode);
      particle.pos.push(parseInt(valueNode.value) || 0)
    });
    const velValues = inputForm.querySelectorAll("#vel").forEach(valueNode => {
      particle.vel.push(parseInt(valueNode.value) || 0)
    });
    const accelValues = inputForm.querySelectorAll("#accel").forEach(valueNode => {
      particle.accel.push(parseInt(valueNode.value) || 0)
    });
    ctx.clearRect(0, 0, 2000, 2000)
    acceleration(ctx, particle);
  })
}

// inputForm.querySelectorAll('input').forEach(input => {
//   if (input.id == "pos" || input.id == "vel" ) {
//     input.classList.add('active')
//   }
// })
module.exports = submitAccelForm;