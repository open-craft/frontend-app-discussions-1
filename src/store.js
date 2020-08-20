import { configureStore } from '@reduxjs/toolkit';
import { courseThreadsReducer } from './discussions/threads/data';
import { postsReducer } from './discussions/posts/data';
import { topicsReducer } from './discussions/topics/data';

const store = configureStore({
  reducer: {
    topics: topicsReducer,
    posts: postsReducer,
    threads: courseThreadsReducer,
  },
});

export default store;
