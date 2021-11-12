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
    const tempData = { ...articleData };
    tempData[key] = [...tempData[key], value];
    setArticleData(tempData);
  };
  const handleArrDataRemove = (key, innerText) => {
    const tempData = { ...articleData };
    tempData[key] = tempData[key].filter((item) => item !== innerText);
    setArticleData(tempData);
  };

  return (
    <StyledRoot>
      <StyledTop>
        <ArticleTitle handleDataChange={handleDataChange} />
        <StyledMiddleLine />
        <ArticleTag
          tags={articleData.tags}
          handleArrDataChange={handleArrDataChange}
          handleArrDataRemove={handleArrDataRemove}
        />
      </StyledTop>
      <ArticleBody handleDataChange={handleDataChange} />
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
