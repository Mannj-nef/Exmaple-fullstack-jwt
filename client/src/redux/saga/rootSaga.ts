import { all } from "redux-saga/effects";
import watchAuth from "./authSaga";
import watchUsers from "./userSaga";

function* rootSaga() {
  yield all([watchUsers(), watchAuth()]);
}

export default rootSaga;
