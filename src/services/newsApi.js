import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://min-api.cryptocompare.com/data/v2";

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        "/news/?apiKey=5597bebd5ac1e6a1872d172dcb5b64b1a63c25d8314751fe111b96b8bb7855f1&lang=EN",
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
