import React from "react";
import { Layout } from "../../shared/ui/layout/Layout";
import { InputSearch } from "../../shared/ui/input-search/InputSearch";
import { Characters } from "../../shared/ui/characters/Characters";
import { Pagination } from "../../shared/ui/pagination/Pagination";
import { useCharacters } from "./hooks/useCharacters";
import { Loader } from "../../shared/ui/loader/Loader";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/domain/store/hooks";
import {
  changeSearchValue,
  selectSearchValue,
} from "../../shared/domain/store/slices/searchValueSlice";

import styles from "./characters-page.module.scss";

export const CharactersPage: React.FC = () => {
  const { characters, pages, name, loader } = useCharacters();

  const inputValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <InputSearch
        defaultValue={inputValue}
        placeholder="Search"
        onChangeValue={(value) => dispatch(changeSearchValue(value))}
        onSearch={() => name.setName(inputValue)}
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
