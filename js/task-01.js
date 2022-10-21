const mainListRef = document.querySelector('#categories');
console.log('Number of categories:', mainListRef.children.length);

const itemListRef = document.querySelectorAll('.item');

itemListRef.forEach((item) => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
