import { createStore, applyMiddleware, compose } from "redux";
//midlelware
import thunk from "redux-thunk";
import rootReducer from "./reducers";
//creo un estrado inicial
const initialState = {};
//llamo al midlelware
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  //de la siguiente manera puedo utilizar devtools en chrome
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
