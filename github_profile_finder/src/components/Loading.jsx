import React from "react";
import Styled from "styled-components";
import { colors } from "../lib/colors";

const Loading = () => {
  return <LoadingSpin colors={colors} />;
};

const LoadingSpin = Styled.div`
  margin: 200px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.colors.gray} ;
  border-right-color: ${(props) => props.colors.orange};
  animation: spin 500ms linear 0s infinite normal none;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
