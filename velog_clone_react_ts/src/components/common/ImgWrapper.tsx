import React from "react";
import styled from "styled-components";

interface ImgWrapperProps {
  ratio: string;
  children: React.ReactNode;
}

function ImgWrapper(props: ImgWrapperProps) {
  const { ratio, children } = props;

  return <StyledImgWrapper ratio={ratio}>{children}</StyledImgWrapper>;
}

const StyledImgWrapper = styled.div<ImgWrapperProps>`
  padding-top: ${({ ratio, children }) => (children ? ratio : "0%")};
  position: relative;
  margin-bottom: 16px;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImgWrapper;
