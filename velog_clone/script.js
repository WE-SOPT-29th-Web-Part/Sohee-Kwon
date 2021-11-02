const options = document.querySelectorAll(".option");
const optionList = document.querySelector(".nav__options");
const selectedOption = document.querySelector(".nav__select > p");
const posts = document.querySelectorAll(".post");
const modal = document.querySelector(".modal");
const tagForm = document.querySelector(".tag__form");
const tagList = document.querySelector(".tag__list");
const tagInput = document.querySelector(".tag__input");
const navTrending = document.querySelector(".nav__trending");
const navRecent = document.querySelector(".nav__recent");
const navBar = document.querySelector(".nav__gnb-bar");

let tags = [];
let currentMenu = "trending";

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

const switchMenu = (mode) => {
  switch (mode) {
    case "trending":
      currentMenu = "trending";
      navTrending.classList.add("selected");
      navTrending.querySelector("img").src = "./source/trending-up-black.svg";
      navRecent.classList.remove("selected");
      navRecent.querySelector("img").src = "./source/clock-gray.svg";
      navBar.style.marginLeft = 0;
      break;
    case "recent":
      currentMenu = "recent";
      navTrending.classList.remove("selected");
      navTrending.querySelector("img").src = "./source/trending-up-gray.svg";
      navRecent.classList.add("selected");
      navRecent.querySelector("img").src = "./source/clock-black.svg";
      if (window.innerWidth <= 1056) {
        navBar.style.marginLeft = "80px";
      } else {
        navBar.style.marginLeft = "112px";
      }
      break;
    default:
      break;
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
