import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";

interface IInitialState {
  users: IUser[];
  userIsChange: boolean;
  user: IUser | null;
  idUser: string;
  isUpdateUser: boolean;
  loading: boolean;
  error: boolean;
  accessTolken: string;
}

const initialState: IInitialState = {
  users: [],
  idUser: "",
  user: null,
  userIsChange: false,
  isUpdateUser: false,
  loading: false,
  error: false,
  accessTolken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state: IInitialState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    getAllUser: (state: IInitialState, action: PayloadAction<string>) => {
      state.accessTolken = action.payload;
    },
    getAllUserSuccess: (
      state: IInitialState,
      action?: PayloadAction<IUser[]>
    ) => {
      const users = action?.payload;
      state.users = users ? users : [];
    },
    getUserById: (state: IInitialState, action: PayloadAction<string>) => {
      state.idUser = action.payload;
    },
    getUserByIdSuccess: (
      state: IInitialState,
      action: PayloadAction<IUser>
    ) => {
      state.user = action.payload;
      state.idUser = "";
    },
    clearUser: (state: IInitialState) => {
      state.users = [];
      state.loading = false;
      state.error = false;
      state.accessTolken = "";
    },
    isOpenModalUpdate: (
      state: IInitialState,
      action: PayloadAction<boolean>
    ) => {
      state.isUpdateUser = action.payload;
    },
    updateUser: (
      state: IInitialState,
      action: PayloadAction<{ newUser: IUser; token: string }>
    ) => {
      state.user = action.payload.newUser;
      state.userIsChange = true;
    },
    updateUserSuccess: (state: IInitialState, action: PayloadAction<IUser>) => {
      const userUpdate = action.payload;

      state.isUpdateUser = false;
      state.user = userUpdate;
      state.userIsChange = false;
      state.idUser = "";
    },
    deleteUser: (state: IInitialState, action: PayloadAction<string>) => {
      state.idUser = action.payload;
    },
    deleteUserSuccess: (
      state: IInitialState,
      action: PayloadAction<IUser>
    ) => {},
    failed: (state: IInitialState) => {
      state.error = true;
      state.idUser = "";
      state.userIsChange = false;
    },
  },
});
export const { setLoading, failed, clearUser, getUserById } = userSlice.actions;
export const { getAllUser, getAllUserSuccess, updateUser } = userSlice.actions;
export const { deleteUser, deleteUserSuccess } = userSlice.actions;
export const { updateUserSuccess, isOpenModalUpdate, getUserByIdSuccess } =
  userSlice.actions;

export default userSlice.reducer;
