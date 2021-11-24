//инициализация
const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

// кнопку стоп не активной
stopBtn.setAttribute('disabled', true);

//генератор случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// слушатели событий на кнопки
startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

//
function onClickStartBtn() {
  timerId = setInterval(() => {
    //вызываем функцию getRandomHexColor() и записываем значение в randomColor
    const randomColor = getRandomHexColor();
    // присваиваем значение цвета body
    bodyEl.style.backgroundColor = randomColor;
  }, 1000);
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', true);
}

function onClickStopBtn() {
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
}
