import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";

export const reducers = combineReducers({
	user: userReducer,
});
