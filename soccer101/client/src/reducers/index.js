import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import posts from "./posts/postSlice";
export default combineReducers({ alert, auth, posts });
