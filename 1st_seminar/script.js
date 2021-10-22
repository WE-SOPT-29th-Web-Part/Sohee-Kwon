const forms = document.querySelectorAll(".todos__form");
const todoLists = document.querySelectorAll(".todos__items");
const deleteButtons = document.querySelectorAll(".todos__delete");
const sections = document.querySelectorAll(".todos > section");
const navButtons = document.querySelectorAll(".nav__button");

const handleSection = (event) => {
  const mode = event.target.innerText;

  navButtons.forEach((btn) => {
    btn.style.color = "orange";
    btn.style.backgroundColor = "white";
    btn.style.fontWeight = "normal";
  });
  event.target.style.color = "white";
  event.target.style.backgroundColor = "orange";
  event.target.style.fontWeight = "bold";

  switch (mode) {
    case "오늘만 보기":
      sections[0].style.width = "100%";
      sections[1].style.width = "0";
      sections[0].style.visibility = "visible";
      sections[1].style.visibility = "hidden";
      forms[0].style.visibility = "visible";
      forms[1].style.visibility = "hidden";
      break;
    case "내일만 보기":
      sections[0].style.width = "0";
      sections[1].style.width = "100%";
      sections[0].style.visibility = "hidden";
      sections[1].style.visibility = "visible";
      forms[0].style.visibility = "hidden";
      forms[1].style.visibility = "visible";
      break;
    default:
      sections[0].style.width = "50%";
      sections[1].style.width = "50%";
      sections[0].style.visibility = "visible";
      sections[1].style.visibility = "visible";
      forms[0].style.visibility = "visible";
      forms[1].style.visibility = "visible";
      break;
  }
};

const deleteItem = (event) => {
  const item = event.target.parentNode.parentNode;
  item.remove();
};

const createListItem = (text) => {
  const p = document.createElement("p");
  p.innerText = text;

  const button = document.createElement("button");
  button.setAttribute("class", "todos__delete");
  button.innerText = "X 삭제";
  button.addEventListener("click", deleteItem);

  const div = document.createElement("div");
  div.setAttribute("class", "todos__item-wrap");
  div.appendChild(p);
  div.appendChild(button);

  const li = document.createElement("li");
  li.setAttribute("class", "todos__item");
  li.appendChild(div);

  return li;
};

const addItem = (event) => {
  event.preventDefault();

  const target = event.target.querySelector(".todos__input");
  if (target.value === "") return;

  const todoList = target.name === "today" ? todoLists[0] : todoLists[1];
  todoList.appendChild(createListItem(target.value));
  target.value = "";
};

const init = () => {
  forms.forEach((form) => form.addEventListener("submit", addItem));
  deleteButtons.forEach((btn) => btn.addEventListener("click", deleteItem));
  navButtons.forEach((btn) => btn.addEventListener("click", handleSection));
};

init();
