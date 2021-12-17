import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import ArticleBody from "../components/write/ArticleBody";
import ArticleTitle from "../components/write/ArticleTitle";
import ArticleTag from "../components/write/ArticleTag";
import ArticleFooter from "../components/write/ArticleFooter";
import { createArticle, updateArticle } from "../libs/api";
import { colors } from "../libs/constants/colors";
import PublishScreen from "../components/write/publishScreen/index";

const Write = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state();

  const [articleData, setArticleData] = useState(
    article ?? {
      id: "",
      title: "",
      body: "",
      summary: "",
      tags: [],
      thumbnail: "",
      date: "",
    }
  );

  const [isPublishScreen, setIsPublishScreen] = useState(false);

  const createArticleFunc = async () => {
    await createArticle(articleData);
    navigate("/");
  };
  const updateArticleFunc = async () => {
    await updateArticle(articleData);
    navigate(`/article/${articleData.id}`, { state: articleData });
  };
  const handleDataChange = (key, value) => {
    const tempData = { ...articleData };
    tempData[key] = value;
    setArticleData(tempData);
  };
  const handleArrDataChange = (key, value) => {
    handleDataChange(key, [...articleData[key], value]);
  };
  const handleArrDataRemove = (key, value) => {
    const tempData = { ...articleData };
    tempData[key] = tempData[key].filter((item) => item !== value);
    setArticleData(tempData);
  };

  return (
    <StyledRoot>
      <StyledTop>
        <ArticleTitle
          title={articleData.title}
          onDataChange={handleDataChange}
        />
        <StyledMiddleLine />
        <ArticleTag
          tags={articleData.tags}
          onArrDataChange={handleArrDataChange}
          onArrDataDelete={handleArrDataRemove}
        />
      </StyledTop>
      <ArticleBody body={articleData.body} onDataChange={handleDataChange} />
      <ArticleFooter setIsPublishScreen={setIsPublishScreen} />
      <PublishScreen
        handleArticleSave={article ? updateArticleFunc : createArticleFunc}
        isPublishScreen={isPublishScreen}
        setIsPublishScreen={setIsPublishScreen}
        articleData={articleData}
        handleDataChange={handleDataChange}
      />
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledTop = styled.div`
  padding: 32px 48px 0 48px;
  width: 50%;
`;

const StyledMiddleLine = styled.div`
  width: 64px;
  height: 6px;
  background-color: ${colors.lightGray};
  margin: 24px 0;
`;

export default Write;
