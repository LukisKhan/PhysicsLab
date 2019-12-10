const particle = require('./particle');

function acceleration(ctx, particle) {
  // let particles = Array(1)
  //   .fill(true)
  //   .map(() => particle([0,100], [1,0], [.8,0]) )

  const updatePos = (particle) => {
    let { pos, vel, accel } = particle;
    pos = [pos[0] + vel[0], pos[1] + vel[1]]
    vel = [vel[0] + accel[0], vel[1] + accel[1]]
    // console.log(particle);
    return { ...particle, pos, vel };
  }
  const animate = () => {
    let animationId = requestAnimationFrame(animate);
    particle = updatePos(particle)
    let posX = particle.pos[0];
    let posY = particle.pos[1];
    ctx.beginPath();
    ctx.arc(posX, posY, 6, 0 * Math.PI, 2 * Math.PI, true);
    ctx.stroke();
    // ctx.fillText(`${posX}`, posX, posY);
    // if (particle.pos[0] > 700 || particle.pos[1] > 700) {
    //   cancelAnimationFrame(animationId);
    // }
  }
  animate()
}

// const log = (particleArray) => {
//   particleArray.forEach(particle => {
//     console.log(`x: ${particle.pos[0]} \ny: ${particle.pos[1]}`);
//   })
// }

module.exports = acceleration;