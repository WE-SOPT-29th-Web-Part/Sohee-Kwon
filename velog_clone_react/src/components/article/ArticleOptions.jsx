import React from "react";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const ArticleOptions = ({ onArticleDelete, onArticleEdit }) => {
  return (
    <StyledRoot>
      <button>통계</button>
      <button onClick={() => onArticleEdit()}>수정</button>
      <button onClick={() => onArticleDelete()}>삭제</button>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  text-align: right;
  & > button {
    font-size: 16px;
    color: ${colors.dateGray};
    background-color: ${colors.mainWhite};
  }
  & > button + button {
    margin-left: 8px;
  }
`;

export default ArticleOptions;
