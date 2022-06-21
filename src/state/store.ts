import { configureStore } from '@reduxjs/toolkit';
import studentReducer from "./ducks/student/reducers";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
//   applyMiddleware(sagaMiddleware)
// import loggerMiddleware from './middleware/logger'


export default configureStore({
  reducer: {
    stu: studentReducer,
  },
});

import { studentSaga } from './ducks/student/sagas'
import reducer from './ducks/student/reducers';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: studentReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware)

  })
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(Saga)

const action = (type: any) => store.dispatch({type})

