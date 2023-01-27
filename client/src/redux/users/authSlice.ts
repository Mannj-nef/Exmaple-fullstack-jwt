import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KEY } from "../../configs/key";
import { IAccount, IUser } from "../../interfaces";

interface IInitialState {
  user: IUser | null;
  loading: boolean;
  errorLogin: boolean;
  account: IAccount;
  isLogin: boolean;
  token: string;
}

const initialState: IInitialState = {
  account: { email: "", password: "" },
  user: null,
  loading: false,
  isLogin: false,
  errorLogin: false,
  token:
    // @ts-ignore
    JSON.parse(localStorage.getItem(KEY.localStorage_accessToken)) || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state: IInitialState) => {
      const userString = localStorage.getItem(KEY.localStorage_user);
      const user = userString ? JSON.parse(userString) : null;
      state.user = user;
    },
    setLoading: (state: IInitialState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLogin: (state: IInitialState, action: PayloadAction<IAccount>) => {
      const { email, password } = action.payload;

      state.account = { email, password };
    },
    setLogOut: (state: IInitialState) => {
      state.isLogin = false;
    },
    setLogOutSuccess: (state: IInitialState) => {
      localStorage.removeItem(KEY.localStorage_user);
      localStorage.removeItem(KEY.localStorage_accessToken);
      state.account = { email: "", password: "" };
      state.user = null;
      state.token = "";
    },
    setLoginSuccess: (
      state: IInitialState,
      action: PayloadAction<IInitialState>
    ) => {
      const { user, token } = action.payload;

      localStorage.setItem(KEY.localStorage_user, JSON.stringify(user));
      localStorage.setItem(KEY.localStorage_accessToken, JSON.stringify(token));

      state.user = user;
      state.errorLogin = false;
      state.isLogin = true;
      state.token = token;
    },
    setLoginFailure: (state: IInitialState) => {
      state.errorLogin = true;
    },
  },
});
export const { setLogin, getUser, setLogOut } = authSlice.actions;
export const { setLoading, setLogOutSuccess } = authSlice.actions;
export const { setLoginSuccess, setLoginFailure } = authSlice.actions;

export default authSlice.reducer;
