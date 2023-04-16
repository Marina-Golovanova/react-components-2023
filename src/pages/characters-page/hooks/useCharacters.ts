import React from "react";
import { useGetCharactersQuery } from "../../../shared/domain/store/slices/apiSlice";
import { useAppSelector } from "../../../shared/domain/store/hooks";
import { selectSearchValue } from "../../../shared/domain/store/slices/searchValueSlice";

export const useCharacters = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const [name, setName] = React.useState(useAppSelector(selectSearchValue));

  const { data, isLoading, isSuccess } = useGetCharactersQuery({
    page: currentPage,
    name,
  });

  if (isSuccess) {
    return {
      characters: data.characters,
      pages: { currentPage, totalPages: data.pages, setCurrentPage },
      name: { name, setName },
      loader: { isLoading, isLoaded: isSuccess },
    };
  }

  return {
    characters: [],
    pages: { currentPage, totalPages: 1, setCurrentPage },
    name: { name, setName },
    loader: { isLoading, isLoaded: isSuccess },
  };
};
