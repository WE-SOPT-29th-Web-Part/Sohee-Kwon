import React, { useState } from "react";

const AddItem = ({ type, list, setList }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  return (
    <div className="todos__add-wrap">
      <form className="todos__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="todos__input"
          type="text"
          name={type}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력해 주세요"
        />
        <button type="submit" className="todos__add">
          +
        </button>
      </form>
    </div>
  );
};

export default AddItem;
