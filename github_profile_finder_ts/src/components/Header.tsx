import Styled from "styled-components";
import { colors } from "../lib/constants/colors";

function Header() {
  return (
    <HeaderWrap>
      <h1>GitHub Profile Finder</h1>
    </HeaderWrap>
  );
}

const HeaderWrap = Styled.div`
  h1 {
    margin: 0;
    margin-bottom: 10px;
    color: ${() => colors.white};
  }
`;

export default Header;
