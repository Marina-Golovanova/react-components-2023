import React from "react";
import { Link } from "react-router-dom";
import { IArticleCard } from "../../domain/types";

import styles from "./article-card.module.scss";

export const ArticleCard: React.FC<IArticleCard> = (props) => {
  const authorFullName = `${props.author.firstName} ${props.author.lastName}`;

  return (
    <div className={styles.articleCardLayout}>
      <img className={styles.articleImage} src={props.imgUrl} />

      <div className={styles.articleCardContent}>
        <div className={styles.articleCardHeader}>
          <div className={styles.articleCardTag}>{props.tag}</div>
          <div>{props.createdDate}</div>
        </div>

        <div className={styles.articleCardTitle}>{props.title}</div>

        <div className={styles.articleCardPreview}>{props.preview}</div>

        <div className={styles.footer}>
          <div className={styles.author}>
            <img className={styles.authorImage} src={props.author.imageUrl} />
            <div>{authorFullName}</div>
          </div>

          <div>
            <Link to={props.articleUrl}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
