const particle = require('./particle');

function projectile(ctx, particle, actualAccel, maxX = 400, maxY = 400) {
  const toScaleX = (num, maxX = 350) => {
    return ((num - 100) / 350 * maxX).toFixed(1);
  }
  const toScaleY = (num, maxY = 350) => {
    return ((400 - num) / 350 * maxY).toFixed(1);
  }
  const updatePos = (particle) => {
  }
  const animate = () => {
  }
  animate()
}


module.exports = projectile;