const options = document.querySelectorAll(".option");
const optionList = document.querySelector(".nav__options");
const selectedOption = document.querySelector(".nav__select > p");
const posts = document.querySelectorAll(".post");
const modal = document.querySelector(".modal");
const tagForm = document.querySelector(".tag__form");
const tagList = document.querySelector(".tag__list");
const tagInput = document.querySelector(".tag__input");

let tags = [];

const deleteTag = (event) => {
  tags = tags.filter((el) => el !== event.target.innerText);
  event.target.remove();
};

const addTag = (event) => {
  event.preventDefault();
  const newTag = tagInput.value;

  if (tags.find((el) => el === newTag) === undefined) {
    const tag = document.createElement("li");
    tag.classList.add("tag");
    tag.addEventListener("click", deleteTag);
    tags.push(newTag);
    tag.innerText = newTag;
    tagInput.before(tag);
  }
  tagInput.value = "";
};

const cancelPost = () => {
  modal.style.display = "none";
  modal.innerHTML = "";
  document.body.style.overflow = "auto";
};

const showPost = (index) => {
  if (window.innerWidth > 767) {
    modal.style.display = "block";
    modal.appendChild(posts[index - 1].cloneNode(true));
    const modalPost = modal.querySelector(".post");
    modalPost.style.margin = "auto";
    modalPost.style.marginTop = "10%";
    modalPost.onclick = null;
    document.body.style.overflow = "hidden";

    const cancelButton = document.createElement("button");
    cancelButton.innerText = "X";
    cancelButton.classList.add("modal__button");
    cancelButton.addEventListener("click", cancelPost);
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
  tagForm && tagForm.addEventListener("submit", addTag);
};

init();
