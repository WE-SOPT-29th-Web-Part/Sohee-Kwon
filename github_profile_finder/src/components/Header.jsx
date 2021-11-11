import React from "react";
import Styled from "styled-components";
import { colors } from "../lib/colors";

const Header = () => {
  return (
    <HeaderWrap colors={colors}>
      <h1>GitHub Profile Finder</h1>
    </HeaderWrap>
  );
};

const HeaderWrap = Styled.div`
  h1 {
    margin: 0;
    margin-bottom: 10px;
    color: ${(props) => props.colors.white};
  }
`;

export default Header;
