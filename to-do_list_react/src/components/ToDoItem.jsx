import React from "react";

const ToDoItem = ({ text, list, setList }) => {
  const handleClick = (e) => {
    setList(list.filter((item) => item !== text));
  };

  return (
    <li className="todos__item">
      <div className="todos__item-wrap">
        <p>{text}</p>
        <button className="todos__delete" onClick={(e) => handleClick(e)}>
          X 삭제
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
