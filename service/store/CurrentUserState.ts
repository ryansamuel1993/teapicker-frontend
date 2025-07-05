import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { RootState } from '../AppStore';

export interface CurrentUserStateType {
  currentUser?: User;
}

export const initialState: CurrentUserStateType = {};

const CurrentUserSlice = createSlice({
  name: 'CurrentUser',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | undefined>): CurrentUserStateType {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
});

export const { setCurrentUser } = CurrentUserSlice.actions;

export const currentUserState = (state: RootState) => state.currentUser;
export const currentUserReducer = CurrentUserSlice.reducer;
