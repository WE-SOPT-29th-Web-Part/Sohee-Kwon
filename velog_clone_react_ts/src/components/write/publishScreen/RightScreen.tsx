import React from "react";
import styled from "styled-components";
import { colors } from "../../../libs/constants/colors";
import { StyledButton } from "../ArticleFooter";

interface RightScreenProps {
  handleArticleSave: () => Promise<void>;
  updateIsPublishScreen: (value: boolean) => void;
}

function RightScreen(props: RightScreenProps) {
  const { handleArticleSave, updateIsPublishScreen } = props;

  return (
    <StyledRoot>
      <StyledButton onClick={() => updateIsPublishScreen(false)}>
        취소
      </StyledButton>
      <StyledButton onClick={async () => await handleArticleSave()}>
        출간하기
      </StyledButton>
    </StyledRoot>
  );
}

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
