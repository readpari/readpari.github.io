import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import PariState from './reducers/PariState';
import LoginReducer from './reducers/LoginReducer';
import ThunkReducer from './reducers/ThunkReducer';

export const store = configureStore({
  reducer: {
    PariState,
    LoginReducer,
    ThunkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
