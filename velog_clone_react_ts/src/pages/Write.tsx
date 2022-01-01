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
import { Article, Keys } from "../types/interface";

const isArticle = (data: unknown): data is Article => {
  return (data as Article).title !== undefined;
};

function Write() {
  const navigate = useNavigate();
  const location = useLocation();
  const article: Article | null = isArticle(location.state)
    ? location.state
    : null;

  const [articleData, setArticleData] = useState<Article>(
    article ?? {
      id: "",
      title: "",
      body: "",
      summary: "",
      tags: [],
      thumbnail: undefined,
      date: "",
    }
  );

  const [isPublishScreen, setIsPublishScreen] = useState<boolean>(false);

  const createArticleFunc = async (): Promise<void> => {
    await createArticle(articleData);
    navigate("/");
  };
  const updateArticleFunc = async (): Promise<void> => {
    await updateArticle(articleData);
    navigate(`/article/${articleData.id}`, { state: articleData });
  };
  const handleDataChange = (
    key: Exclude<Keys, "tags">,
    value: string
  ): void => {
    const tempData: Article = { ...articleData };
    tempData[key] = value;
    setArticleData(tempData);
  };
  const handleArrDataChange = (
    key: Extract<Keys, "tags">,
    value: string
  ): void => {
    const tempData: Article = { ...articleData };
    tempData[key] = [...articleData[key], value];
    setArticleData(tempData);
  };
  const handleArrDataDelete = (key: Extract<Keys, "tags">, value: string) => {
    const tempData: Article = { ...articleData };
    tempData[key] = tempData[key].filter((item) => item !== value);
    setArticleData(tempData);
  };
  const updateIsPublishScreen = (value: boolean): void => {
    setIsPublishScreen(value);
  };

  return (
    <StyledRoot>
      <StyledTop>
        <ArticleTitle
          title={articleData.title}
          handleDataChange={handleDataChange}
        />
        <StyledMiddleLine />
        <ArticleTag
          tags={articleData.tags}
          handleArrDataChange={handleArrDataChange}
          handleArrDataDelete={handleArrDataDelete}
        />
      </StyledTop>
      <ArticleBody
        body={articleData.body}
        handleDataChange={handleDataChange}
      />
      <ArticleFooter updateIsPublishScreen={updateIsPublishScreen} />
      <PublishScreen
        handleArticleSave={article ? updateArticleFunc : createArticleFunc}
        isPublishScreen={isPublishScreen}
        updateIsPublishScreen={updateIsPublishScreen}
        articleData={articleData}
        handleDataChange={handleDataChange}
      />
    </StyledRoot>
  );
}

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
