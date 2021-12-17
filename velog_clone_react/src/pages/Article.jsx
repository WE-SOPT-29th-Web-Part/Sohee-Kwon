import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import ArticleOptions from "../components/article/ArticleOptions";
import Profile from "../components/home/Profile";
import ImgWrapper from "../components/common/ImgWrapper";
import { deleteArticle } from "../libs/api";
import styled from "styled-components";
import { colors } from "../libs/constants/colors";
import { StyledTag } from "../components/write/ArticleTag";

const Article = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, title, body, thumbnail, date, tags } = location.state;

  const handleArticleDelete = async () => {
    await deleteArticle(id);
    navigate("/");
  };

  const handleArticleEdit = () => {
    navigate(`/article/edit/${id}`, { state: location.state });
  };

  return (
    <StyledRoot>
      <Header />
      <StyledWrapper>
        <h1>{title}</h1>
        <ArticleOptions
          onArticleDelete={handleArticleDelete}
          onArticleEdit={handleArticleEdit}
        />
        <StyledInformation>
          <span>권소희</span>
          <span>·</span>
          <span>{date}</span>
        </StyledInformation>
        <StyledTags>
          {tags.map((tag) => (
            <StyledTag key={tag}>{tag}</StyledTag>
          ))}
        </StyledTags>
        <ImgWrapper ratio="50%">
          {thumbnail && (
            <ImgWrapper>
              <img src={thumbnail} alt="thumbnail" />
            </ImgWrapper>
          )}
        </ImgWrapper>
        <StyledContents>{body}</StyledContents>
        <Profile />
      </StyledWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: 100%;
  margin: auto;
  background-color: ${colors.mainWhite};
`;

const StyledWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  margin: auto;
  & > h1 {
    margin-top: 88px;
    margin-bottom: 32px;
    font-size: 36px;
    font-weight: 800;
  }
`;

const StyledInformation = styled.div`
  margin-top: 24px;
  & > span:nth-child(1) {
    color: ${colors.darkBlack};
    font-weight: bold;
  }
  & > span:nth-child(2) {
    margin: 0 8px;
  }
  & > span:nth-child(3) {
    color: ${colors.lightGray};
  }
`;

const StyledTags = styled.div`
  margin-top: 14px;
`;

const StyledContents = styled.div`
  margin-top: 80px;
`;

export default Article;
