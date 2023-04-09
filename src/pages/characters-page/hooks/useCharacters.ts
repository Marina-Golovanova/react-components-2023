import React from "react";
import { requestCharacters } from "../../../shared/api";
import { ICharacter } from "../../../shared/domain/types";

export const useCharacters = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const [characters, setCharacters] = React.useState<ICharacter[]>([]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const [name, setName] = React.useState(
    localStorage.getItem("inputValue") || ""
  );

  React.useEffect(() => {
    setIsLoading(true);
    setIsLoaded(false);
    requestCharacters({ page: currentPage, name })
      .then((data) => {
        setCharacters(data.characters);
        setIsLoaded(true);
        setIsLoading(false);
        setTotalPages(data.pages);

        if (currentPage > data.pages) {
          setCurrentPage(data.pages);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        setIsLoaded(true);
      });
  }, [currentPage, name]);

  return {
    characters,
    pages: { currentPage, totalPages, setCurrentPage },
    name: { name, setName },
    loader: { isLoading, isLoaded },
  };
};
