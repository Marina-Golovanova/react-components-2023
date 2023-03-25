import React from "react";
import { Layout } from "../../shared/ui/layout/Layout";

import styles from "./not-found-page.module.scss";

export class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.notFoundPage}>Oop...404</div>
      </Layout>
    );
  }
}
