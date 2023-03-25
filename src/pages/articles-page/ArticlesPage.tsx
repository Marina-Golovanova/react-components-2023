import React from "react";
import { Layout } from "../../shared/ui/layout/Layout";
import { InputSearch } from "../../shared/ui/input-search/InputSearch";
import { Articles } from "../../shared/ui/articles/Articles";
import { articles } from "../../shared/data";

type PropsType = Record<string, never>;

export class ArticlesPage extends React.Component {
  state: { inputValue: string };

  constructor(props: PropsType) {
    super(props);

    this.state = {
      inputValue: localStorage.getItem("inputValue") || "",
    };
  }

  componentDidUpdate() {
    localStorage.setItem("inputValue", this.state.inputValue);
  }

  render() {
    return (
      <Layout>
        <InputSearch
          defaultValue={this.state.inputValue}
          placeholder="Search"
          onSearch={this.handleInputValueChange}
        />

        <Articles articles={articles} />
      </Layout>
    );
  }

  handleInputValueChange = (value: string) => {
    this.setState((state) => ({ ...state, inputValue: value }));
  };
}
