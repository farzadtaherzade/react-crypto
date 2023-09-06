import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Keyx-access-token":
  "https://tech.sabzlearn.ir/uploads/ce01010101it/redux_ex/Redux50-apiCall-middleware.mp4",
};

const baseUrl = "https://api.coinranking.com/v2";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cyptoApi = createApi({
  reducerPath: "crypto",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptoQuery } = cyptoApi;
