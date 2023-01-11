import { takeLatest, all } from "redux-saga/effects";
import { setUsers } from "../users/userSlice";

function* handleLoginUser() {}
function* handleLogOutUser() {}
function* handleGetUsers() {}
function* handleUpdateUser() {}
function* handleDeleteUser() {}

function* watchGetUsers() {
  yield takeLatest(setUsers, handleGetUsers);
}

function* watchUsers() {
  yield all([
    watchGetUsers,
    handleLoginUser,
    handleUpdateUser,
    handleLogOutUser,
    handleDeleteUser,
  ]);
}

export default watchUsers;
