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
  //EQUATIONS
  // Vf = Vi + at
  // X = ((Vf + Vi) / 2) * t
  // X = Vi * t + (1/2 * a * tt)
  // Vf2 = Vi2 + (2 * a * X)
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

    // Vf = Vi + at
    // Draw Vel vs Time graph
    if (allButOne(finalVel, initVel, accelInput, time)) {
      console.log(firstEquation(finalVel, initVel, accelInput, time));
    } 

    // X = ((Vf + Vi) / 2) * t
    // Draw Distance Vs Time Graph
    if (allButOne(distance, finalVel, initVel, time)) {
      console.log(secondEquation(distance, finalVel, initVel, time));
    } 
    
    // X = Vi * t + (1/2 * a * tt)
    // Draw Height vs Horizontal distance
    if (allButOne(distance, initVel, time, accelInput)) {
      console.log(thirdEquation(distance, initVel, time, accelInput));
    } 
    
    // Vf2 = Vi2 + (2 * a * X)
    if (allButOne(finalVel, initVel, accelInput, distance)) {
      console.log(fourthEquation(finalVel, initVel, accelInput, distance));
    }
  }

  // Vf = Vi + at
  const firstEquation = (Vf, Vi, a, t) => {
    console.log("SOLVING FIRST EQUATION");
    if (!Vf && Vf !== 0) {
      console.log("Final Velocity");
      console.log(Vf);
      return Vi + a * t;
    } else if(!Vi && Vi !== 0) {
      console.log("Initial Velocity");
      return Vf - a * t;
    } else if (!a && a !== 0) {
      console.log("Acceleration");
      return (Vf - Vi) / t;
    } else {
      console.log("Time");
      return (Vf - Vi) / a;
    }
  }

  // X = ((Vf + Vi) / 2) * t
  const secondEquation = (X, Vf, Vi, t) => {
    console.log("SOLVING SECOND EQUATION");
    if (!X && X !== 0) {
      console.log("Change in distance/height");
      return ((Vf + Vi) / 2) * t;
    } else if (!Vf && Vf !== 0) {
      console.log("Final Velocity");
      return ((X / t ) * 2) - Vi;
    } else if (!Vi && Vi !== 0) {
      console.log("Initial Velocity");
      return ((X / t) * 2) - Vf;
    } else {
      console.log("Time");
      return X / ((Vf + Vi) / 2);
    }
  }
  // X = Vi * t + (1/2 * a * tt)
  const thirdEquation = (X, Vi, t, accel) => {
    console.log("SOLVING THIRD EQUATION");
    if (!X && X !== 0) {
      console.log("Change in distance");
      return Vi * t + (1 / 2 * accel * t * t);
    } else if (!Vi && Vi !== 0) {
      console.log("Initial Velocity");
      return (X - (1 / 2 * accel * t * t)) / t;
    } else if (!t && t !== 0) {
      console.log("Time");
      let a = (1/2) * accel;
      let b = Vi;
      let c = -X;
      //Using quadratic equation; gives two answers
      let answerOne = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      let answerTwo = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      //Return the positive value;
      return Math.max(answerOne, answerTwo);
    } else {
      console.log("Acceleration");
      return (2 * (X - (Vi * t))) / (t * t);
    }
  }
  
  // Vf2 = Vi2 + (2 * a * X)
  const fourthEquation = (Vf, Vi, a, X) => {
    console.log("SOLVING FOURTH EQUATION");
    if (!Vf && Vf !== 0) {
      console.log("Final Velocity");
      return Math.sqrt(Vi * Vi + 2 * a * X);
    } else if (!Vi && Vi !== 0) {
      console.log("Initial Velocity");
      return Math.sqrt(Vf * Vf - 2 * a * X);
    } else if (!a && a !== 0) {
      console.log("Acceleration");
      return ((Vf * Vf) - (Vi * Vi)) / (2 * X);
    } else {
      console.log("Change in Distance");
      return ((Vf * Vf) - (Vi * Vi)) / (2 * a);
    }
  }
  
  chooseEquation(particle);
  
  ////////////////////////////////////////////////PICK UP HERE NEXT SESSION
  ///////Animate after solving
  const updatePos = (particle) => {
    
  }

  const animate = () => {

  }
  animate()
}

module.exports = projectile;