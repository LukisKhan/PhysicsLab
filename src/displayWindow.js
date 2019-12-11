const submitForm = require('./submitForm');
const submitAccelForm = require('./submitAccelForm');
const drawAxis = require('./drawAxis');

function displayWindow (canvas) {
  const topicList = document.querySelector('.topics');
  const topicWindows = document.querySelectorAll('.topic-window');
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
        } else {
          topicWindow.classList.remove('active');
        }
      })
      switch(currentWindow) {
        case "velocity":
          console.log("vel case");
          // ctx = canvas.getContext("2d");
          submitForm(ctx);
          break;
        case "acceleration":
          console.log("accel case");
          // ctx = canvas.getContext("2d");
          submitAccelForm(ctx);
          break;
        default:
          console.log("default case");
          // ctx = canvas.getContext("2d");
          submitForm(ctx);
      }
    }
  })
}

module.exports = displayWindow;