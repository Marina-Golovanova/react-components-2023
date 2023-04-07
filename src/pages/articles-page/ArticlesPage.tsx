import React from "react";
import { Layout } from "../../shared/ui/layout/Layout";
import { InputSearch } from "../../shared/ui/input-search/InputSearch";
import { Articles } from "../../shared/ui/articles/Articles";
import { articles } from "../../shared/data";

export const ArticlesPage: React.FC = () => {
  const [inputValue, setInputValue] = React.useState(
    localStorage.getItem("inputValue") || ""
  );

  React.useEffect(() => {
    return () => localStorage.setItem("inputValue", inputValue);
  }, [inputValue]);

  return (
    <Layout>
      <InputSearch
        defaultValue={inputValue}
        placeholder="Search"
        onSearch={(value) => setInputValue(value)}
      />

      <Articles articles={articles} />
    </Layout>
  );
};
