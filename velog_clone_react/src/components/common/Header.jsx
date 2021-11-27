import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../libs/constants/colors";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ArrowDownImage } from "../../assets/icons/arrow_down.svg";
import profileImage from "../../assets/images/profile.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <StyledLeft onClick={() => navigate("/")}>
        <span>sopt.log</span>
      </StyledLeft>
      <StyledRight>
        <SearchIcon />
        <Link to="/write">
          <button>새 글 작성</button>
        </Link>
        <StyledThumbnail>
          <img src={profileImage} alt="profile" />
          <ArrowDownImage fill="darkgray" />
        </StyledThumbnail>
      </StyledRight>
    </StyledRoot>
  );
};

const StyledRoot = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: auto;
  height: 64px;
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    height: 20px;
    width: 100%;
    margin-right: 12px;
    cursor: pointer;
  }
  button {
    width: 97px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 16px;
    border: 1px solid ${colors.mainBlack};
    background-color: white;
    margin-right: 20px;
    transition: background-color 300ms ease;
    cursor: pointer;
    color: ${colors.darkBlack};
    font-size: 16px;
    font-weight: bold;
    &:hover {
      background-color: ${colors.mainBlack};
      color: ${colors.lineGray};
    }
  }
`;

const StyledLeft = styled.div`
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
`;

const StyledThumbnail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  img {
    margin-right: 4px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &:hover svg {
    fill: black;
  }
`;

export default Header;
