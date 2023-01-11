import { configureStore } from "@reduxjs/toolkit";

import useSlice from "./users/userSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

const sagaMiddeware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    useSlice,
  },
  middleware: (gDM) => gDM().concat(sagaMiddeware),
});

sagaMiddeware.run(rootSaga);

export default store;
