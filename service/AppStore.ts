import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@/service/types/user';

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: null as User | null,
  reducers: {
    setCurrentUser: (_state, action: PayloadAction<User>) => action.payload,
    removeCurrentUser: () => null,
  },
});

export const { setCurrentUser, removeCurrentUser } = currentUserSlice.actions;

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) => useSelector(selector);

export default store;
