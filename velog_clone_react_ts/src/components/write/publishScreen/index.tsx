import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../../libs/constants/colors";
import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";
import { Article, Keys } from "../../../types/interface";

interface PublishScreenProps {
  handleArticleSave: () => Promise<void>;
  isPublishScreen: boolean;
  updateIsPublishScreen: (value: boolean) => void;
  articleData: Article;
  handleDataChange: (key: Exclude<Keys, "tags">, value: string) => void;
}
interface StyledProps {
  isPublishScreen: boolean;
}

const PublishScreen = (props: PublishScreenProps) => {
  const {
    handleArticleSave,
    isPublishScreen,
    updateIsPublishScreen,
    articleData,
    handleDataChange,
  } = props;
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: number = 0;

    if (isPublishScreen) {
      setIsAnimate(true);
    } else if (!isPublishScreen && isAnimate) {
      timeoutId = setTimeout(() => {
        setIsAnimate(false);
      }, 125);
    }

    return () => {
      if (timeoutId !== 0) {
        clearTimeout(timeoutId);
      }
    };
  }, [isAnimate, isPublishScreen]);

  if (!isPublishScreen && !isAnimate) return null;
  return (
    <StyledRoot isPublishScreen={isPublishScreen}>
      <StyledWrapper>
        <LeftScreen
          handleDataChange={handleDataChange}
          articleData={articleData}
        />
        <StyledCenterLine />
        <RightScreen
          handleArticleSave={handleArticleSave}
          updateIsPublishScreen={updateIsPublishScreen}
        />
      </StyledWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.mainWhite};
  transform: translateY(100%);

  ${({ isPublishScreen }) =>
    isPublishScreen
      ? css`
          animation: slideUp 250ms forwards ease-in;
        `
      : css`
          animation: slideDown 125ms forwards ease-out;
        `}

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const StyledWrapper = styled.div`
  width: 768px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
`;

const StyledCenterLine = styled.div`
  width: 1px;
  height: 100px;
  margin: 0 32px;
  background-color: ${colors.lightGray};
`;

export default PublishScreen;
