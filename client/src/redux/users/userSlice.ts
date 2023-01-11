import { createSlice } from "@reduxjs/toolkit";
import { IAction, IUser } from "../../interfaces";

interface IInitialState {
  users: IUser[];
  user: IUser | {};
  loading: boolean;
  messageCode: string;
}

const initialState: IInitialState = {
  users: [],
  user: {},
  loading: false,
  messageCode: "",
};

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state: IInitialState, action: IAction) => {
      state.loading = true;
    },
    setLoaded: (state: IInitialState, action: IAction) => {
      state.loading = false;
    },
    setUsers: (state: IInitialState, action: IAction) => {
      const { users } = action.payload;
      state.users = users;
    },
    setLogin: (state: IInitialState, action: IAction) => {
      const { user } = action.payload;
      state.user = user;
    },
    setLogOut: (state: IInitialState, action: IAction) => {
      const { messageCode } = action.payload;
      state.user = {};
      state.messageCode = messageCode;
    },
    setUpdateUser: (state: IInitialState, action: IAction) => {
      const { user } = action.payload;
      state.user = user;
    },
    setDeleteUser: (state: IInitialState, action: IAction) => {
      const { messageCode } = action.payload;
      state.messageCode = messageCode;
    },
  },
});

export const {
  setLoading,
  setLoaded,
  setUsers,
  setDeleteUser,
  setLogin,
  setUpdateUser,
} = useSlice.actions;
export default useSlice.reducer;
