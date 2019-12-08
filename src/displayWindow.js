const submitForm = require('./submitForm');
const submitAccelForm = require('./submitAccelForm');

function displayWindow (canvas) {
  const topicList = document.querySelector('.topics');
  const topicWindows = document.querySelectorAll('.topic-window');
  let currentWindow = "";
  let ctx;
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
          ctx = canvas.getContext("2d");
          submitForm(ctx);
          break;
        case "acceleration":
          ctx = canvas.getContext("2d");
          submitAccelForm(ctx);
          break;
        default:
          submitAccelForm(ctx);
      }
    }
  })
}

module.exports = displayWindow;