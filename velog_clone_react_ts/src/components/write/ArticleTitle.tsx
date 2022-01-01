import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { Keys } from "../../types/interface";

interface ArticleTitleProps {
  title: string;
  handleDataChange: (key: Exclude<Keys, "tags">, value: string) => void;
}

function ArticleTitle(props: ArticleTitleProps) {
  const { title, handleDataChange } = props;

  return (
    <StyledTextarea
      placeholder="제목을 입력하세요."
      value={title}
      onChange={(e) => handleDataChange("title", e.target.value)}
    />
  );
}

const StyledTextarea = styled(TextareaAutosize)`
  font-size: 36px;
  width: 100%;
  white-space: pre-wrap;
  height: auto;
`;

export default ArticleTitle;
