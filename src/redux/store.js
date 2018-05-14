import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers'
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      sagaMiddleware
    )
  );
}