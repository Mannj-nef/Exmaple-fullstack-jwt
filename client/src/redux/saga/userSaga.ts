import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { takeLatest, all, put, call } from "redux-saga/effects";
import UserApi from "../../api/userApi";
import { TOAST_TYPE } from "../../configs/constants";
import message from "../../configs/message";
import { actionLogin, IAccount } from "../../interfaces";
import { ROUTER_PATH } from "../../routers/router";
import {
  setLoading,
  setLogin,
  setLoginfailure,
  setLoginSuccess,
  setMessageCode,
} from "../users/userSlice";

function* handleLoginUser(action: PayloadAction<actionLogin>): any {
  const { email, password, navigate } = action.payload;
  const userAccount = {
    email,
    password,
  };

  yield put(setLoading(true));
  try {
    const dataResponse = yield call(UserApi.login, userAccount);

    if (dataResponse) {
      yield put(setLoginSuccess(dataResponse));
      yield put(setMessageCode(dataResponse.codeMessage));

      toast.success(message.LOGIN_SUCCESS, TOAST_TYPE);
      navigate(ROUTER_PATH.HOME);
    }

    yield put(setLoading(false));
  } catch (error) {
    let codeMessage = "Unknown Error";
    if (error instanceof Error) codeMessage = error.message;
    toast.error(message.LOGIN_FAILURE, TOAST_TYPE);

    yield put(setLoginfailure());
    yield put(setMessageCode(codeMessage));
    yield put(setLoading(false));
  }
}
// function* handleLogOutUser() {}
// function* handleGetUsers() {}
// function* handleUpdateUser() {}
// function* handleDeleteUser() {}

function* watchGetUsers() {
  // yield takeLatest(setUsers, handleGetUsers);
}

function* watchLogin() {
  yield takeLatest(setLogin, handleLoginUser);
}

function* watchUsers() {
  yield all([watchGetUsers(), watchLogin()]);
}

export default watchUsers;
