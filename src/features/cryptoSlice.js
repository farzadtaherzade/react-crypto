import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crypto: [],
  favs: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCryptos: (state, action) => {
      state.crypto = action.payload;
    },
    addFav: (state, action) => {
      state.favs.push(action.payload);
    },
  },
});

export const { setCredentials, logout } = cryptoSlice.actions;

export default cryptoSlice.reducer;
