import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from '../features/tasks/taskSlice';
import postsReducer from '../features/posts/postSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        posts: postsReducer,
    },
});
