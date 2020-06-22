import { combineReducers } from "redux";
import { LoginReducer } from "./Login/Reducers/LoginReducer";

export const rootReducer = combineReducers({
    loginReducer:LoginReducer
});
