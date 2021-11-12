import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const ArticleTitle = ({ handleDataChange }) => {
  return (
    <StyledTextarea
      placeholder="제목을 입력하세요."
      onChange={(e) => handleDataChange("title", e.target.value)}
    />
  );
};

export default ArticleTitle;

const StyledTextarea = styled(TextareaAutosize)`
  font-size: 36px;
  width: 100%;
  white-space: pre-wrap;
  height: auto;
`;
