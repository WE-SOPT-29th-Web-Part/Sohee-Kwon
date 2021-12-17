import React from "react";
import styled from "styled-components";
import { colors } from "../../../libs/constants/colors";
import { StyledButton } from "../ArticleFooter";

const RightScreen = ({ handleArticleSave, setIsPublishScreen }) => {
  const handlePost = async () => {
    await handleArticleSave();
  };

  return (
    <StyledRoot>
      <StyledButton onClick={() => setIsPublishScreen(false)}>
        취소
      </StyledButton>
      <StyledButton onClick={handlePost}>출간하기</StyledButton>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  width: 100%;
  & > button:nth-child(1) {
    background-color: ${colors.dateGray};
  }
  & > button + button {
    background-color: ${colors.subGreen};
    margin-left: 12px;
  }
`;

export default RightScreen;
