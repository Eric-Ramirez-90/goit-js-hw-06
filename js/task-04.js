let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
};

const onDecremenBtnClick = refs.decrementBtn.addEventListener(
  'click',
  countDecrement
);

function countDecrement() {
  refs.value.textContent = counterValue -= 1;
}

const onIncrementBtnClick = refs.incrementBtn.addEventListener(
  'click',
  countIncrement
);

function countIncrement() {
  refs.value.textContent = counterValue += 1;
}
