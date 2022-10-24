function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divControls: document.querySelector('#controls'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  inputField: document.querySelector('#controls > input'),
  divContainer: document.querySelector('#boxes'),
};

let inputValue = 0;

refs.inputField.addEventListener('input', onInputChange);
// refs.buttonCreate.addEventListener('click', onbuttonCreateClick);
// refs.buttonCreate.addEventListener('click', onbuttonDestroyClick);

function onInputChange() {
  inputValue = Number(refs.inputField.value);
  console.log(inputValue);
  createBoxes();
}

// function onbuttonCreateClick() {

// }

// function onbuttonDestroyClick() {}

const arr = [];
function createBoxes(amount) {
  amount = inputValue;

  for (let i = 0; i <= amount; i += 1) {
    const markup = `<div class="box-style"></div>`;
    arr.push(markup);
  }
  refs.divContainer.insertAdjacentHTML('beforeend', arr.join(''));
  console.log(arr);
}
