import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/userSlice";
import authSlice from "./users/authSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

const sagaMiddeware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    userSlice,
    authSlice,
  },
  middleware: (gDM) => gDM().concat(sagaMiddeware),
});

sagaMiddeware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
