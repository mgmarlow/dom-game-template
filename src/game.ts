import { createSlice, configureStore } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = gameSlice.actions;

const store = configureStore({
  reducer: gameSlice.reducer,
});

export default store;

export type GameState = ReturnType<typeof store.getState>;
export type GameDispatch = typeof store.dispatch;
