import { toast } from "react-toastify";
import { takeLatest, all, put, call, select } from "redux-saga/effects";
import { RootState } from "../store";
import UserApi from "../../api/userApi";
import { TOAST_TYPE } from "../../configs/constants";
import { IAction, IUser, IUserApi } from "../../interfaces";
import {
  getAllUser,
  failed,
  getAllUserSuccess,
  setLoading,
  updateUser,
  updateUserSuccess,
  getUserByIdSuccess,
  isOpenModalUpdate,
  deleteUser,
} from "../users/userSlice";
import { getUser } from "../users/authSlice";
import { KEY } from "../../configs/key";

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

  const user: IUser | null = yield select(
    (state: RootState) => state.authSlice.user
  );

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
      toast.success("Update user success", TOAST_TYPE);
      yield put(isOpenModalUpdate(false));

      if (data.user?._id === user?._id) {
        yield localStorage.setItem(
          KEY.localStorage_user,
          JSON.stringify(data.user)
        );
      }
      yield put(getUser());
    }
    yield put(setLoading(false));
  } catch (error: any) {
    console.log(error);
    toast.error(error.response.data.codeMessage, TOAST_TYPE);

    yield put(failed());
    yield put(setLoading(false));
  }
}

function* handleDeleteUser(action: IAction) {
  const idUser = action.payload;
  const token: string = yield select(
    (state: RootState) => state.userSlice.accessTolken
  );
  yield put(setLoading(true));
  try {
    const response: IUserApi = yield call(UserApi.deleteUser, idUser, token);
    toast.success(response.codeMessage, TOAST_TYPE);
    console.log(response);

    yield put(setLoading(true));
    yield put(getAllUser(token));
  } catch (error: any) {
    toast.error(error.response.data.codeMessage, TOAST_TYPE);
    yield put(failed());
    yield put(setLoading(false));
  }
}

function* watchGetAllUser() {
  yield takeLatest(getAllUser, handleGetAllUsers);
}
function* watchGetUserById() {
  // yield takeLatest(getUserById, handleGetUserById);
}
function* watchUpdateUser() {
  yield takeLatest(updateUser, handleUpdateUser);
}
function* watchDeleteUser() {
  yield takeLatest(deleteUser, handleDeleteUser);
}

function* watchUsers() {
  yield all([
    watchGetAllUser(),
    watchUpdateUser(),
    watchGetUserById(),
    watchDeleteUser(),
  ]);
}

export default watchUsers;
