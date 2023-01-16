import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KEY } from "../../configs/key";
import { actionLogin, IAccount, IUser } from "../../interfaces";

interface IInitialState {
  users: IUser[];
  user: IUser | null;
  loading: boolean;
  isLogin: boolean;
  messageCode: string;
  account: IAccount;
}

const initialState: IInitialState = {
  account: { email: "", password: "" },
  users: [],
  user: null,
  loading: false,
  isLogin: false,
  messageCode: "",
};

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state: IInitialState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    getUser: (state: IInitialState) => {
      const userString = localStorage.getItem(KEY.localStorage_user);
      const user = userString ? JSON.parse(userString) : null;
      state.user = user;
    },
    getAllUser: (state: IInitialState, action?: PayloadAction<IUser[]>) => {
      const users = action?.payload;
      state.users = users ? users : [];
    },
    setLogin: (state: IInitialState, action: PayloadAction<actionLogin>) => {
      const { email, password } = action.payload;
      state.account = { email, password };
    },
    setLoginSuccess: (
      state: IInitialState,
      action: PayloadAction<IInitialState>
    ) => {
      const { user } = action.payload;
      console.log(user);

      localStorage.setItem(KEY.localStorage_user, JSON.stringify(user));

      state.user = user;
      state.isLogin = true;
    },
    setLoginfailure: (state: IInitialState) => {
      state.isLogin = false;
    },
    setMessageCode: (state: IInitialState, action: PayloadAction<string>) => {
      state.messageCode = action.payload;
    },
  },
});
export const { setLoading, setLogin } = useSlice.actions;
export const { setLoginSuccess, setLoginfailure } = useSlice.actions;
export const { setMessageCode, getUser, getAllUser } = useSlice.actions;

export default useSlice.reducer;
