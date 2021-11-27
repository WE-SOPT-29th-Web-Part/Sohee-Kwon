import React from "react";

const Nav = ({ setMode }) => {
  const handleClick = (type, e) => {
    setMode(type);
    e.target.parentNode.childNodes.forEach((button) =>
      button.classList.remove("selected")
    );
    e.target.classList.add("selected");
  };

  return (
    <nav className="nav">
      <button className="nav__button" onClick={(e) => handleClick("today", e)}>
        오늘만 보기
      </button>
      <button
        className="nav__button"
        onClick={(e) => handleClick("tomorrow", e)}
      >
        내일만 보기
      </button>
      <button
        className="nav__button selected"
        onClick={(e) => handleClick("both", e)}
      >
        함께 보기
      </button>
    </nav>
  );
};

export default Nav;
