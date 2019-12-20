const submitForm = require('./submitForm');
const submitAccelForm = require('./submitAccelForm');
const submitProjForm = require('./submitProjForm');
const drawAxis = require('./drawAxis');

function displayWindow (canvas) {
  const topicList = document.querySelector('.topics');
  const topicWindows = document.querySelectorAll('.topic-window');
  const equation = document.getElementById('equation');
  let currentWindow = "velocity";
  let ctx = canvas.getContext("2d");
  // don't draw axis until topic has been picked
  // drawAxis(ctx, width, height);
  topicList.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
      const topicClicked = document.querySelector(e.target.dataset.topic)
      topicWindows.forEach(topicWindow => {
        if (topicWindow == topicClicked) {
          topicWindow.classList.add('active');
          currentWindow = topicWindow.classList[1];
          console.log(topicClicked);
          equation.innerText = `${currentWindow}`;
        } else {
          topicWindow.classList.remove('active');
        }
      });
      switch(currentWindow) {
        case "velocity":
          console.log("vel case");
          ctx.clearRect(0, 0, 2000, 2000);
          submitForm(ctx);
          break;
        case "acceleration":
          console.log("accel case");
          ctx.clearRect(0, 0, 2000, 2000);
          submitAccelForm(ctx);
          break;
        case "projectile":
          console.log("projectile case");
          ctx.clearRect(0, 0, 2000, 2000);
          submitProjForm(ctx);
          break;
        default:
          console.log("default case");
          ctx.clearRect(0, 0, 2000, 2000);
          submitForm(ctx);
      }
    }
  })
}

module.exports = displayWindow;