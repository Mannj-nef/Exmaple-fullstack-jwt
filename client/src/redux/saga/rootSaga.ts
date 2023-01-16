import { all } from "redux-saga/effects";
import watchUsers from "./userSaga";

function* rootSaga() {
  yield all([watchUsers()]);
}

export default rootSaga;
