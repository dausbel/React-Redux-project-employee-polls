// combine reducers

import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
// so we will have one single state object
