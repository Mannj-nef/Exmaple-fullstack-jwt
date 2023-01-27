import { takeLatest, all, put, call, select } from "redux-saga/effects";
import UserApi from "../../api/userApi";
import { IAction, IUser, IUserApi } from "../../interfaces";
import {
  getAllUser,
  failed,
  getAllUserSuccess,
  setLoading,
  updateUser,
  updateUserSuccess,
  getUserById,
  getUserByIdSuccess,
} from "../users/userSlice";

function* handleGetAllUsers(action: IAction) {
  const token: string = action.payload;

  yield put(setLoading(true));
  try {
    const datas: IUserApi = yield call(UserApi.getAllUser, token);

    if (datas) {
      yield put(getAllUserSuccess(datas.users as IUser[] & void));
    }
    yield put(setLoading(false));
  } catch (error) {
    yield put(failed());
    yield put(setLoading(false));
  }
}

function* handleGetUserById(action: IAction) {
  yield put(setLoading(true));
  const id: string = action.payload;
  const token: string = yield select((state) => state.userSlice.accessTolken);
  console.log(token);

  try {
    const data: IUserApi = yield call(UserApi.getUserById, id, token);
    if (data) {
      yield put(getUserByIdSuccess(data.user as IUser));
    }
  } catch (error) {
    yield put(failed());
    yield put(setLoading(false));
  }
}

function* handleUpdateUser(action: IAction) {
  yield put(setLoading(true));
  console.log(0);

  try {
    const { newUser, token }: { newUser: IUser; token: string } =
      action.payload;
    const data: IUserApi = yield call(
      UserApi.updateUser,
      newUser._id,
      newUser,
      token
    );
    if (data) {
      yield put(updateUserSuccess(data?.user as IUser));
    }
    yield put(setLoading(false));
  } catch (error) {
    yield put(failed());
    yield put(setLoading(false));
  }
}

function* watchGetAllUser() {
  yield takeLatest(getAllUser, handleGetAllUsers);
}
function* watchGetUserById() {
  yield takeLatest(getUserById, handleGetUserById);
}
function* watchUpdateUser() {
  yield takeLatest(updateUser, handleUpdateUser);
}

function* watchUsers() {
  yield all([watchGetAllUser(), watchUpdateUser(), watchGetUserById()]);
}

export default watchUsers;
