// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import memesReducer from './memes'

const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
