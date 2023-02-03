const divs = document.querySelectorAll("div");

const randomColor = () => {
  const hue = Math.floor(Math.random() * 500);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const debounce = (func, wait = 10, immediate = true) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const addNewDiv = () => {
  const newDivs = document.querySelectorAll("div");
  const pixel = window.scrollY + window.innerHeight - 200;
  if ((newDivs.length - 2) * 200 <= pixel <= newDivs.length * 200 - 100) {
    document.body.innerHTML += `<div style="background-color: ${randomColor()}"></div>`;
  }
};

divs.forEach((div) => {
  div.style.backgroundColor = randomColor();
});

window.addEventListener("scroll", debounce(addNewDiv));
