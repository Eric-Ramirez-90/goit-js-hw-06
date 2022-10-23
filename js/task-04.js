let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementtBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
};

const decrementAction = refs.decrementBtn.addEventListener(
  'click',
  countDecrement
);

function countDecrement() {
  refs.value.textContent = counterValue -= 1;
}

const incrementAction = refs.incrementtBtn.addEventListener(
  'click',
  countIncrement
);

function countIncrement() {
  refs.value.textContent = counterValue += 1;
}
