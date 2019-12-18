const particle = require('./particle');

function acceleration(ctx, particle, actualAccel, maxX = 400, maxY = 400) {
  // let particles = Array(1)
  //   .fill(true)
  //   .map(() => particle([0,100], [1,0], [.8,0]) )
  const startVel = particle.vel[1];
  const updatePos = (particle) => {
    let { pos, vel, accel } = particle;
    pos = [pos[0] + vel[0], pos[1] - vel[1]]
    vel = [vel[0], vel[1] + accel[1]]
    console.log(particle);
    return { ...particle, pos, vel };
  }
  const toScaleX = (num, maxX = 350) => {
    return ((num - 100) / 350 * maxX).toFixed(1);
  }
  const toScaleY = (num, maxY = 350) => {
    return ((400 - num) / 350 * maxY).toFixed(1);
  }
  const animate = () => {
    let animationId = requestAnimationFrame(animate);
    let prevPos = particle.pos;
    particle = updatePos(particle)
    let posX = particle.pos[0];
    let posY = particle.pos[1];
    ctx.moveTo(prevPos[0], prevPos[1]);
    ctx.lineTo(particle.pos[0], particle.pos[1]);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(posX, posY, 1, 0 * Math.PI, 2 * Math.PI, true);
    ctx.stroke();
    ctx.clearRect(440, 0, 200, 400);
    let actualX = toScaleX(posX, maxX);
    let actualY = toScaleY(posY, maxY);
    ctx.font = "15px Arial"
    ctx.fillText(`Distance: ${actualY} (m/s)`, 460, 100);
    ctx.fillText(`Time: ${actualX} (s)`, 460, 130);
    ctx.fillText(`Start vel: ${startVel} (m/s)`, 460, 160);
    ctx.fillText(`End vel: ${particle.vel[1]} (m/s)`, 460, 190);
    ctx.fillText(`Accel: ${actualAccel} (m/s)`, 460, 220);
    ctx.font = "20px Arial"
    if (particle.pos[0] > 449 || particle.pos[1] < 51) {
      cancelAnimationFrame(animationId);
    }
  }
  animate()
}

// const log = (particleArray) => {
//   particleArray.forEach(particle => {
//     console.log(`x: ${particle.pos[0]} \ny: ${particle.pos[1]}`);
//   })
// }

module.exports = acceleration;