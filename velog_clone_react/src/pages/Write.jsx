import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArticleBody from "../components/write/ArticleBody";
import ArticleTitle from "../components/write/ArticleTitle";
import ArticleTag from "../components/write/ArticleTag";
import ArticleFooter from "../components/write/ArticleFooter";
import { createArticle } from "../libs/api";
import { colors } from "../libs/constants/colors";

const Write = () => {
  const navigate = useNavigate();

  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    tags: [],
    thumbnail: "",
    date: "",
  });

  const createArticleFunc = async () => {
    await createArticle(articleData);
    navigate("/");
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
        <ArticleTitle onDataChange={handleDataChange} />
        <StyledMiddleLine />
        <ArticleTag
          tags={articleData.tags}
          onArrDataChange={handleArrDataChange}
          onArrDataRemove={handleArrDataRemove}
        />
      </StyledTop>
      <ArticleBody onDataChange={handleDataChange} />
      <ArticleFooter createArticle={createArticleFunc} />
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
