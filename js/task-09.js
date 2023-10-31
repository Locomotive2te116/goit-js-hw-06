function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btncolor = document.querySelector('change-color');
const body = document.querySelector("body");

btncolor.addEventListener('click', () => { 
   body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
})