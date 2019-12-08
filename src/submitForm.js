const velocity = require('./velocity');

function submitForm (ctx) {
  const inputForm = document.forms['inputs'];
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let particle = {pos: [], vel: []};
    const posValues = inputForm.querySelectorAll("#pos").forEach(valueNode => {
      console.log(valueNode);
      particle.pos.push(parseInt(valueNode.value) || 0)
    });
    const velValues = inputForm.querySelectorAll("#vel").forEach(valueNode => {
      particle.vel.push(parseInt(valueNode.value) || 0)
    });
    ctx.clearRect(0, 0, 400, 400)
    velocity(ctx, particle);
  })
}
module.exports = submitForm;