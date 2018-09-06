import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
//exporto y llamo a otro reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
