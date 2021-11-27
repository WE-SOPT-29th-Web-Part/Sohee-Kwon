import React from "react";
import ToDoItem from "./ToDoItem";
import AddItem from "./AddItem";

const ToDoList = ({ type, list, setList }) => {
  return (
    <section className="todos__section">
      <h2>{type === "today" ? "오늘 할 일" : "내일 할 일"}</h2>
      <ul className="todos__items">
        {list.map((item) => (
          <ToDoItem text={item} list={list} setList={setList} />
        ))}
      </ul>
      <AddItem type={type} list={list} setList={setList} />
    </section>
  );
};

export default ToDoList;
