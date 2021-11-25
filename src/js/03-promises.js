import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');
const delayEl = document.querySelector('[name=delay]');
const stepEl = document.querySelector('[name=step]');
const amountEl = document.querySelector('[name=amount]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  // resolve(value) - функция для вызова при успешной операции. Переданный ей аргумент будет значением выполненного промиса.
  // reject(error) - функция для вызвова в случае ошибки. Переданный ей аргумент будет значением отклоненного промиса.

  // возвращает один промис, который выполянется или отклоняется через delay времени
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
  });
}

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  // отключаем перезагрузку
  event.preventDefault();

  let delay = delayEl.value;
  const step = stepEl.value;
  const amount = amountEl.value;

  for (let i = 1; i <= amount; i++) {
    delay += step;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
  }
}
