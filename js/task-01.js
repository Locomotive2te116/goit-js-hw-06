const listCategories = document.querySelector('#categories');
const items = listCategories.children;
console.log(`Number of categories: ${items.length}`);

[...items].forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.querySelectorAll("li").length}`);

});


