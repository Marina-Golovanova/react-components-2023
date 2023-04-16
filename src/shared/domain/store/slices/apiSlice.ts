import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { capitalizeString } from "../../../utils/capitalizeString";
import { v4 as uuidv4 } from "uuid";
import { ICharacter } from "../../types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-one-api.dev/v2",
    headers: {
      Authorization: "Bearer hh9YeNA2VtwpjCySLrL1",
    },
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ page, name }) => {
        const nameFilter = name.length ? `&name=${capitalizeString(name)}` : "";
        return `character?limit=12&page=${page}${nameFilter}`;
      },
      transformResponse: (response: { docs: ICharacter[]; pages: number }) => {
        const characters = response.docs.map((character: ICharacter) => ({
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
        return { characters, pages: response.pages };
      },
    }),
  }),
});

export const { useGetCharactersQuery } = apiSlice;
