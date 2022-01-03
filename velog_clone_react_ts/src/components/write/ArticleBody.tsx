import React from "react";
import styled from "styled-components";
import { Keys } from "../../types/interface";

interface ArticleBodyProps {
  body: string;
  handleDataChange: (key: Exclude<Keys, "tags">, value: string) => void;
}

function ArticleBody(props: ArticleBodyProps) {
  const { body, handleDataChange } = props;

  return (
    <StyledTextarea
      placeholder="당신의 이야기를 적어보세요..."
      value={body}
      onChange={(e) => handleDataChange("body", e.target.value)}
    ></StyledTextarea>
  );
}

const StyledTextarea = styled.textarea`
  flex: 1;
  width: 50%;
  white-space: pre-wrap;
  padding: 0 48px;
  font-size: 18px;
`;

export default ArticleBody;
