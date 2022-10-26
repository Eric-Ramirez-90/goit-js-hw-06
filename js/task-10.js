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

refs.inputField.addEventListener('input', onInputChange);
refs.buttonCreate.addEventListener('click', onbuttonCreateClick);
refs.buttonCreate.addEventListener('click', onbuttonDestroyClick);

let inputValue = 0;
let changeBoxSizeCounter = 0;

function onInputChange(event) {
  inputValue = event.currentTarget.value;
}
const allSreatedBoxes = refs.divContainer.children;
function onbuttonCreateClick(event) {
  event = createBoxes();

  console.log(allSreatedBoxes);
}

function createBoxes(amount) {
  amount = inputValue;

  for (let i = 0; i < amount; i += 1) {
    const boxStarSize = 30 + changeBoxSizeCounter;
    changeBoxSizeCounter += 10;
    const createBox = document.createElement('div');
    createBox.style.backgroundColor = getRandomHexColor();
    createBox.classList.add('box-style');
    createBox.style.width = `${boxStarSize}px`;
    createBox.style.height = `${boxStarSize}px`;
    refs.divContainer.appendChild(createBox);
  }
}

function onbuttonDestroyClick() {}
