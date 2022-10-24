const refs = {
  input: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
  refs.spanText.style.fontSize = `${refs.input.value}px`;
}
