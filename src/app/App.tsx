import React from "react";
import Layout from "../shared/ui/layout/Layout";
import InputSearch from "../shared/ui/input-search/InputSearch";
import Articles from "../shared/ui/articles/Articles";
import { articles } from "../shared/data";

import "./styles/root.scss";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <InputSearch placeholder="Search" onSearch={() => {}} />

        <Articles articles={articles} />
      </Layout>
    );
  }
}
