const options = document.querySelectorAll(".option");
const optionList = document.querySelector(".nav__options");
const selectedOption = document.querySelector(".nav__select > p");
const posts = document.querySelectorAll(".post");
const modal = document.querySelector(".modal");

const showPost = (index) => {
  if (window.innerWidth > 767) {
    modal.style.display = "block";
    modal.appendChild(posts[index - 1]);
    const modalPost = modal.querySelector(".post");
    modalPost.style.margin = "auto";
    modalPost.style.marginTop = "10%";
    modalPost.onclick = null;

    const cancelButton = document.createElement("button");
    cancelButton.innerText = "X";
    cancelButton.classList.add("modal__button");
    cancelButton.addEventListener("click", () => {
      modal.style.display = "none";
      modal.innerHTML = "";
    });
    modal.appendChild(cancelButton);
  }
};

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
