import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { takeLatest, all, put, call } from "redux-saga/effects";
import UserApi from "../../api/userApi";
import { TOAST_TYPE } from "../../configs/constants";
import message from "../../configs/message";
import { IAccount } from "../../interfaces";
import {
  setLoading,
  setLogin,
  setLoginFailure,
  setLoginSuccess,
  setLogOut,
  setLogOutSuccess,
} from "../users/authSlice";
import { clearUser } from "../users/userSlice";

function* handleLoginUser(action: PayloadAction<IAccount>): any {
  const { email, password } = action.payload;
  const userAccount = {
    email,
    password,
  };

  yield put(setLoading(true));
  try {
    const dataResponse = yield call(UserApi.login, userAccount);

    if (dataResponse) {
      yield put(setLoginSuccess(dataResponse));

      toast.success(message.LOGIN_SUCCESS, TOAST_TYPE);
    }

    yield put(setLoading(false));
  } catch (error) {
    console.log(error);

    yield put(setLoginFailure());
    yield put(setLoading(false));

    toast.error(message.LOGIN_FAILURE, TOAST_TYPE);
  }
}

function* handleLogOut() {
  yield put(setLoading(true));
  try {
    yield put(setLogOutSuccess());
    yield put(clearUser());
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoginFailure());
    yield put(setLoading(false));
  }
}

function* watchLogin() {
  yield takeLatest(setLogin, handleLoginUser);
}
function* watchLogOut() {
  yield takeLatest(setLogOut, handleLogOut);
}

function* watchAuth() {
  yield all([watchLogin(), watchLogOut()]);
}

export default watchAuth;
