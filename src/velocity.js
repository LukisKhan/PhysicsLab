const particle = require('./particle');

function velocity(ctx, particle, actualVel, maxX = 400, maxY = 400) {
  // console.log(particle)
  const updatePos = (particle) => {
    let {pos, vel, accel }= particle;
    //if Y values are so large, zoom out on Y-axis, zoom in to x-axis
    if(maxY > 400) {
      pos = [pos[0] + (vel[0] / 10) * 350 , pos[1] + (vel[1] / maxY) * 350 ];
    } else if (maxX > 400) {
      pos = [pos[0] + (1/vel[0] / maxX) * 350, pos[1] + (vel[1] / 10) * 350];
    }
    else {
      pos = [pos[0] + vel[0], pos[1] + vel[1]];
    }
    return { ...particle, pos};
  }
  // const pytha = (num1, num2) => {
  //   let pythaNum = Math.sqrt(num1 * num1 + num2* num2);
  //   return pythaNum;
  // }
  const toScaleX = (num, maxX = 350) => {
    return ((num - 100) / 350 * maxX).toFixed(1);
  }
  const toScaleY = (num, maxY = 350) => {
    return ((400 - num) / 350 * maxY).toFixed(1);
  }
  const animate = () => {
    let animationId = requestAnimationFrame(animate);
    let prevPos = particle.pos;
    // console.log("prevPos", prevPos);
    particle = updatePos(particle)
    let posX = particle.pos[0];
    let posY = particle.pos[1];
    // console.log("currentPos", particle.pos);
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
    ctx.fillText(`Distance: ${actualY} (m)`, 460, 100);
    ctx.fillText(`Time: ${actualX} (s)`, 460, 130);
    ctx.fillText(`Velocity: ${actualVel} (m/s)`, 460, 160);
    ctx.font = "20px Arial"
    if (particle.pos[0] > 449 || particle.pos[1] < 51 ) {
      cancelAnimationFrame(animationId);
    }
  }
  animate();
}


module.exports = velocity;

//onclick even bound to LI instead of submit button
//particle properties
//dynamic width and height
//intuitive input
//clear out input values when switching between forms