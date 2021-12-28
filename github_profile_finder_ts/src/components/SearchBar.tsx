import React, { useState } from "react";
import Styled from "styled-components";
import { colors } from "../lib/constants/colors";
import { getUserData } from "../lib/api";
import { UserDataResponse, UserData, Status } from "../types/interface";

interface SearchBarProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}
type ResponseData = UserDataResponse | null;

function SearchBar(props: SearchBarProps) {
  const { userData, setUserData } = props;

  const [input, setInput] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setUserData({ ...userData, status: Status.PENDING });

    try {
      const data: ResponseData = await getUserData(input);
      if (data === null) {
        setUserData({ ...userData, status: Status.REJECTED, data: data });
      } else {
        setUserData({ ...userData, status: Status.RESOLVED, data: data });
      }
    } catch (e) {
      setUserData({ ...userData, status: Status.REJECTED, data: null });
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
