import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

//exporto y llamo a otro reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
