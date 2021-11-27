import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/profile.png";
import { colors } from "../../libs/constants/colors";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";

const Profile = () => {
  return (
    <StyledRoot>
      <StyledProfile>
        <img src={profileImage} alt="profile" />
        <div>
          <h3>권소희</h3>
          <h4>과제가 너무 많아요 'ㅅ'</h4>
        </div>
      </StyledProfile>
      <StyledCenterLine />
      <StyledContact>
        <a href="https://github.com/sohee-K" target="_blank" rel="noreferrer">
          <GithubIcon fill="lightGray" />
        </a>
        <a
          href="https://blog.naver.com/soheekwon"
          target="_blank"
          rel="noreferrer"
        >
          <HomeIcon fill="lightGray" />
        </a>
        <Link to="/">
          <MailIcon fill="lightGray" />
        </Link>
      </StyledContact>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  margin: auto;
  margin-top: 90px;
  width: 100%;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin-right: 16px;
  }
  div {
    h3 {
      margin: 0;
      margin-bottom: 10px;
      font-size: 24px;
    }
    h4 {
      font-weight: normal;
      margin: 0;
      font-size: 18px;
      color: ${colors.lightGray};
    }
  }
`;

const StyledCenterLine = styled.div`
  background-color: rgb(233, 236, 239);
  width: 100%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

const StyledContact = styled.div`
  & > a > svg {
    margin-right: 16px;
    &:hover {
      fill: ${colors.darkBlack};
    }
  }
`;

export default Profile;
