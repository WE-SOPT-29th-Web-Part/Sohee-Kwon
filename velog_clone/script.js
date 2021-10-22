const options = document.querySelectorAll(".option");
const optionList = document.querySelector(".nav__options");
const selectedOption = document.querySelector(".nav__select > p");

const switchOption = (event) => {
  options.forEach((option) => option.classList.remove("selected"));
  event.target.classList.add("selected");
  selectedOption.innerText = event.target.innerText;
  optionList.classList.add("hidden");
};

const init = () => {
  options.forEach((option) => option.addEventListener("click", switchOption));
};

init();
