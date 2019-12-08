

function particle (
  pos = [random(), random()],
  vel = [1, 1],
  accel = [0.5, 0.5]
  ){
  return {pos, vel, accel}
}

function random(min = 0, max = 50) {
  let randomNum = (Math.random() * (max - min) + min);
  return randomNum;
}

module.exports = particle