import { configureStore } from '@reduxjs/toolkit';
import messageBoxReducer from './reducers/messageBox';

export const store = configureStore({
  reducer: {
    messageBox: messageBoxReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
