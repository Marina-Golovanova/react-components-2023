import React from "react";
import { Layout } from "../../shared/ui/layout/Layout";
import { InputSearch } from "../../shared/ui/input-search/InputSearch";
import { Characters } from "../../shared/ui/characters/Characters";
import { Pagination } from "../../shared/ui/pagination/Pagination";
import { useCharacters } from "./hooks/useCharacters";
import { Loader } from "../../shared/ui/loader/Loader";
import { capitalizeString } from "./utils/capitalizeString";

import styles from "./characters-page.module.scss";

export const CharactersPage: React.FC = () => {
  const { characters, pages, name, loader } = useCharacters();

  const [inputValue, setInputValue] = React.useState(name.name);

  React.useEffect(() => {
    return () => localStorage.setItem("inputValue", inputValue);
  }, [inputValue]);

  return (
    <Layout>
      <InputSearch
        defaultValue={inputValue}
        placeholder="Search"
        onChangeValue={setInputValue}
        onSearch={() => name.setName(capitalizeString(inputValue))}
      />

      {loader.isLoaded && (
        <>
          <Characters characters={characters} />
          <div className={styles.footer}>
            <Pagination
              currentPage={pages.currentPage}
              totalPages={pages.totalPages}
              onPrevPage={() => pages.setCurrentPage(pages.currentPage - 1)}
              onNextPage={() => pages.setCurrentPage(pages.currentPage + 1)}
            />
          </div>
        </>
      )}
      {loader.isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </Layout>
  );
};
