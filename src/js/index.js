import colors from './colors';

const refs = {
  stopBtn: document.querySelector('[data-action="stop"]'),
  startBtn: document.querySelector('[data-action="start"]'),
  body: document.querySelector('body'),
};

let timerId = null;
refs.startBtn.disabled = false;
refs.body.style.backgroundColor = null;

refs.startBtn.addEventListener('click', changeColors);
refs.stopBtn.addEventListener('click', stopChangeColors);

function changeColors() {
  timerId = setInterval(() => {
    console.log('меняет цвет');
    const selectedColor = randomIntegerFromInterval(0, colors.length);
    refs.body.style.backgroundColor = colors[selectedColor];
  }, 1000);

  if (timerId) {
    refs.startBtn.disabled = true;
  }
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopChangeColors() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}
