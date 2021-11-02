import React from "react";
import styled from "styled-components";

const CenterTextWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: pink;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

const CenterText = () => {
  return (
    <CenterTextWrap>
      <p className="center-text">D-day 계산기</p>
    </CenterTextWrap>
  );
};

export default CenterText;
