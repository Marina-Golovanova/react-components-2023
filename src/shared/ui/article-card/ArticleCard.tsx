import React from "react";
import { Link } from "react-router-dom";
import { IArticleCard } from "../../domain/interfaces";

import styles from "./article-card.module.scss";

export class ArticleCard extends React.Component<IArticleCard> {
  authorFullName = `${this.props.author.firstName} ${this.props.author.lastName}`;

  render() {
    return (
      <div className={styles.articleCardLayout}>
        <img className={styles.articleImage} src={this.props.imgUrl} />

        <div className={styles.articleCardContent}>
          <div className={styles.articleCardHeader}>
            <div className={styles.articleCardTag}>{this.props.tag}</div>
            <div>{this.props.createdDate}</div>
          </div>

          <div className={styles.articleCardTitle}>{this.props.title}</div>

          <div className={styles.articleCardPreview}>{this.props.preview}</div>

          <div className={styles.footer}>
            <div className={styles.author}>
              <img
                className={styles.authorImage}
                src={this.props.author.imageUrl}
              />
              <div>{this.authorFullName}</div>
            </div>

            <div>
              <Link to={this.props.articleUrl}>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
