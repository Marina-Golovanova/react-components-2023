import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
        const nameFilter = name.length ? `&name=${name}` : "";
        return `character?limit=12&page=${page}${nameFilter}`;
      },
    }),
  }),
});

export const { useGetCharactersQuery } = apiSlice;
