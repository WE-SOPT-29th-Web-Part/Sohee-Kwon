import React, { useState } from "react";
import Styled from "styled-components";
import { colors } from "../lib/colors";
import { getUserData } from "../lib/api";

const SearchBar = ({ userData, setUserData }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUserData({ ...userData, status: "pending" });
      const data = await getUserData(input);
      setUserData({ data: data, status: "resolved" });
    } catch (e) {
      setUserData({ ...userData, status: "rejected" });
    }
    setInput("");
  };

  return (
    <SearchBarWrap colors={colors}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="GitHub 프로필을 검색해보세요."
        />
      </form>
    </SearchBarWrap>
  );
};

const SearchBarWrap = Styled.div`
  input {
    box-sizing: border-box;
    width: 300px;
    height: 50px;
    padding: 15px;
    font-size: 18px;
    border-radius: 25px;
    border: 5px solid ${(props) => props.colors.gray};
    transition: all 0.5s ease-out;
  }
  input:focus {
    outline: none;
    box-shadow: 0px 0px 10px 3px ${(props) => props.colors.yellow};
    transition: all 0.5s ease-out;
  }
`;

export default SearchBar;
