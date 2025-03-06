// redux/postsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface MemesState {
  items: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: MemesState = {
  items: [],
  status: 'idle',
};

const memesSlice = createSlice({
  name: 'memes',
  initialState,
  reducers: {
    setMemes: (state, action: PayloadAction<Post[]>) => {
      state.items = action.payload;
    },
    setStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
  },
});

export const { setMemes, setStatus } = memesSlice.actions;

export default memesSlice.reducer;
