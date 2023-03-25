import React from "react";
import { IArticleCard } from "../../domain/interfaces";
import { ArticleCard } from "../article-card/ArticleCard";

import styles from "./articles.module.scss";

interface ArticlesProps {
  articles: IArticleCard[];
}

export class Articles extends React.Component<ArticlesProps> {
  render() {
    return (
      <div className={styles.articlesLayout}>
        {this.props.articles.map((article) => (
          <ArticleCard {...article} key={article.id} />
        ))}
      </div>
    );
  }
}
