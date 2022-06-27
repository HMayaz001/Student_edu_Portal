import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, rootSaga } from "./ducks";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
