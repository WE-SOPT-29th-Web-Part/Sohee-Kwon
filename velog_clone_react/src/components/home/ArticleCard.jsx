import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";
import ImgWrapper from "../common/ImgWrapper";

const ArticleCard = ({ article }) => {
  const { id, title, summary, tags, thumbnail, date } = article;

  return (
    <StyledRoot>
      <Link to={`article/${id}`} state={article}>
        <ImgWrapper ratio="50%">
          {thumbnail && <img src={thumbnail} alt="thumbnail" />}
        </ImgWrapper>
        <h3>{title}</h3>
      </Link>
      <p>{summary}</p>
      <StyledTag>
        {tags && tags.map((tag) => <span key={tag}>{tag}</span>)}
      </StyledTag>
      <span>{date}</span>
    </StyledRoot>
  );
};

const StyledRoot = styled.article`
  width: 100%;
  color: ${colors.lightGray};
  padding-bottom: 64px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 32px;
  }
  & > span {
    color: ${colors.dateGray};
    font-size: 14px;
  }
`;

const StyledTag = styled.div`
  margin-bottom: 16px;
  & > span {
    display: inline-block;
    padding: 0 16px;
    height: 32px;
    line-height: 32px;
    margin-right: 14px;
    background-color: ${colors.tagGray};
    color: ${colors.subGreen};
    border-radius: 16px;
    cursor: pointer;
  }
`;

export default ArticleCard;
