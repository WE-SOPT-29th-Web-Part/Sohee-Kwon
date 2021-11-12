import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/common/Header";
import Profile from "../components/home/Profile";
import HomeNav from "../components/home/HomeNav";
import ArticlesContainer from "../components/home/ArticlesContainer";
import SeriesCategory from "../components/home/SeriesCategory";
import { colors } from "../libs/constants/colors";

const Home = () => {
  const location = useLocation();

  return (
    <StyledRoot>
      <Header />
      <StyledMain>
        <Profile />
        <HomeNav />
        {location.pathname === "/" ? <ArticlesContainer /> : <SeriesCategory />}
      </StyledMain>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  background-color: ${colors.mainWhite};
`;

const StyledMain = styled.main`
  max-width: 768px;
  width: 100%;
  margin: auto;
`;

export default Home;
