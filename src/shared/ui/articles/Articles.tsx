import React from "react";
import { IArticleCard } from "../../domain/types";
import { ArticleCard } from "../article-card/ArticleCard";

import styles from "./articles.module.scss";

type IArticlesProps = {
  articles: IArticleCard[];
};

export const Articles: React.FC<IArticlesProps> = (props) => {
  return (
    <div className={styles.articlesLayout}>
      {props.articles.map((article) => (
        <ArticleCard {...article} key={article.id} />
      ))}
    </div>
  );
};
