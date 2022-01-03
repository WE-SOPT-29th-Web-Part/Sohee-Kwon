import React from "react";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";
import { Keys } from "../../types/interface";

interface ArticleTagProps {
  tags: string[];
  handleArrDataChange: (key: Extract<Keys, "tags">, value: string) => void;
  handleArrDataDelete: (key: Extract<Keys, "tags">, value: string) => void;
}

function ArticleTag(props: ArticleTagProps) {
  const { tags, handleArrDataChange, handleArrDataDelete } = props;

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      if (
        e.currentTarget.value === "" ||
        e.currentTarget.value === " " ||
        tags.includes(e.currentTarget.value)
      ) {
        e.currentTarget.value = "";
        return;
      }
      handleArrDataChange("tags", e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <StyledRoot>
      {tags &&
        tags.map((tag) => (
          <StyledTag key={tag} onClick={() => handleArrDataDelete("tags", tag)}>
            {tag}
          </StyledTag>
        ))}
      <input
        type="text"
        placeholder="태그를 입력하세요."
        onKeyPress={handleSubmit}
      />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 18px;
  input {
    outline: none;
    border: none;
    width: 200px;
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const StyledTag = styled.div`
  display: inline-block;
  padding: 0 16px;
  height: 32px;
  line-height: 32px;
  margin: 0 12px 12px 0;
  background-color: ${colors.tagGray};
  color: ${colors.subGreen};
  border-radius: 16px;
  cursor: pointer;
`;

export default ArticleTag;
