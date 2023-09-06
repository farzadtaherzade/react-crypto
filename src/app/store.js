import { configureStore } from "@reduxjs/toolkit";

import { cyptoApi } from "../services/cryptoApi";
import { newsApi } from "../services/newsApi";

export default configureStore({
  reducer: {
    [cyptoApi.reducerPath]: cyptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(newsApi.middleware)
      .concat(cyptoApi.middleware),
  devTools: true,
});
