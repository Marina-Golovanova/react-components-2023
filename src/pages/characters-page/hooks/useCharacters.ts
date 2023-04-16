import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useGetCharactersQuery } from "../../../shared/domain/store/slices/apiSlice";
import { ICharacter } from "../../../shared/domain/types";
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
    const characters = data.docs.map((character: ICharacter) => ({
      id: uuidv4(),
      name: character.name,
      height: character.height,
      race: character.race,
      gender: character.gender,
      birth: character.birth,
      spouse: character.spouse,
      death: character.death,
      realm: character.realm,
      wikiUrl: character.wikiUrl,
      hair: character.hair,
    }));

    return {
      characters,
      pages: { currentPage, totalPages: data.pages, setCurrentPage },
      name: { name, setName },
      loader: { isLoading, isLoaded: isSuccess },
    };
  }

  return {
    characters: [],
    pages: { currentPage, totalPages: data?.pages || 1, setCurrentPage },
    name: { name, setName },
    loader: { isLoading, isLoaded: isSuccess },
  };
};
