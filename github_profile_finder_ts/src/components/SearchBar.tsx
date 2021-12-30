import React, { useState } from "react";
import Styled from "styled-components";
import { colors } from "../lib/constants/colors";
import { getUserData } from "../lib/api";
import {
  UserData,
  UserDataResponse,
  ChangeUserData,
  Status,
} from "../types/interface";

interface SearchBarProps {
  userData: UserData;
  changeUserData: ChangeUserData;
}
type ResponseData = UserDataResponse | null;

function SearchBar(props: SearchBarProps) {
  const { userData, changeUserData } = props;

  const [input, setInput] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    changeUserData(userData.data, Status.PENDING);

    try {
      const data: ResponseData = await getUserData(input);
      if (data === null) {
        changeUserData(null, Status.REJECTED);
      } else {
        changeUserData(data, Status.RESOLVED);
      }
    } catch (e) {
      changeUserData(null, Status.REJECTED);
    }
    setInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <SearchBarWrap>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="GitHub 프로필을 검색해보세요."
        />
      </form>
    </SearchBarWrap>
  );
}

const SearchBarWrap = Styled.div`
  input {
    box-sizing: border-box;
    width: 300px;
    height: 50px;
    padding: 15px;
    font-size: 18px;
    border-radius: 25px;
    border: 5px solid ${() => colors.gray};
    transition: all 0.5s ease-out;
  }
  input:focus {
    outline: none;
    box-shadow: 0px 0px 10px 3px ${() => colors.yellow};
    transition: all 0.5s ease-out;
  }
`;

export default SearchBar;
