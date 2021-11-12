import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getArticles } from "../../libs/api";
import { colors } from "../../libs/constants/colors";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getArticles();
      setArticles(data);
    })();
  }, []);

  return (
    <StyledRoot>
      {articles &&
        [...articles]
          .reverse()
          .map((article) => <ArticleCard key={article.id} article={article} />)}
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  & > article + article {
    padding-top: 64px;
    border-top: 1px solid ${colors.lineGray};
  }
`;

export default ArticlesContainer;
