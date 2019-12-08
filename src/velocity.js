const particle = require('./particle');

function velocity (ctx, particle) {
  const updatePos = (particle) => {
    let {pos, vel, accel }= particle;
    pos = [pos[0] + vel[0], pos[1] + vel[1]]
    return { ...particle, pos};
  }
  const animate = () => {
    let animationId = requestAnimationFrame(animate);
    particle = updatePos(particle)
    let posX = particle.pos[0];
    let posY = particle.pos[1];
    ctx.beginPath();
    ctx.arc(posX, posY, 6, 0 * Math.PI, 2 * Math.PI, true);
    ctx.stroke();
    if (particle.pos[0] > 300 || particle.pos[1] > 300 ) {
      cancelAnimationFrame(animationId);
    }
  }
  animate()
}


module.exports = velocity;