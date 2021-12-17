import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../../libs/constants/colors";
import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";

const PublishScreen = ({
  handleArticleSave,
  isPublishScreen,
  setIsPublishScreen,
  articleData,
  handleDataChange,
}) => {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    if (isPublishScreen) {
      setIsAnimate(true);
    } else if (!isPublishScreen && isAnimate) {
      timeoutId = setTimeout(() => {
        setIsAnimate(false);
      }, 125);
    }

    return () => {
      if (timeoutId) {
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
          setIsPublishScreen={setIsPublishScreen}
        />
      </StyledWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
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
