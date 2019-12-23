const particle = require('./particle');

function projectile(ctx, particle, maxX = 400, maxY = 400) {
  const toScaleX = (num, maxX = 350) => {
    return ((num - 100) / 350 * maxX).toFixed(1);
  }
  const toScaleY = (num, maxY = 350) => {
    return ((400 - num) / 350 * maxY).toFixed(1);
  }

  //helper method for chooseEquation, 
  //return true if equation is solvable based on known variables
  const allButOne = (...variables) => {
    let numUnknown = 0;
    (variables).forEach((ele) => {
      if(!ele && ele !== 0) numUnknown++;
    });
    return numUnknown === 1;
  }

  //Choose euqation to solve if all variables are known except 1;
  const chooseEquation = (particle) => {
    let { initVel, finalVel, distance, height, accelInput, time } = particle;
    if (allButOne(finalVel, initVel, accelInput, time)) {
      console.log(firstEquation(finalVel, initVel, accelInput, time));
    }
  }

  const firstEquation = (Vf, Vi, a, t) => {
    if(!Vf) {
      console.log("Final Velocity");
      return Vi + a * t;
    } else if(!Vi) {
      console.log("Initial Velocity");
      return Vf - a * t;
    } else if (!a) {
      console.log("Acceleration");
      return (Vf - Vi) / t;
    } else {
      console.log("Time");
      return (Vf - Vi) / a;
    }
  }
  
  chooseEquation(particle);
///////Animate after solving
  const updatePos = (particle) => {

  }

  const animate = () => {

  }
  animate()
}
//EQUATIONS
// Vf = Vi + at
// X = ((Vf + Vi) / 2) * t
// X = Vi * t + (1/2 * a * tt)
// Vf2 = Vi2 + (2 * a * X)

module.exports = projectile;