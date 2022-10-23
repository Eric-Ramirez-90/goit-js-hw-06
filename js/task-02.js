const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulContainerRef = document.querySelector('#ingredients');

// Перший спосіб
const markup = ingredients.map((ingredient) => {
  const createListItem = document.createElement('li');
  createListItem.classList.add('item');
  createListItem.textContent = ingredient;

  return createListItem;
});

ulContainerRef.append(...markup);

// Другий спосіб
// const arr = [];
// for (let i = 0; i < ingredients.length; i += 1) {

//   const createListItem = document.createElement('li');
//   createListItem.classList.add('js-item');
//   createListItem.textContent = ingredients[i];

//   arr.push(createListItem);
// }
// console.log(arr);
// ulContainerRef.append(...arr);
