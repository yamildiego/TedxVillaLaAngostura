import { combineReducers } from "redux";
import locale from "./locale";
import contact from "./contact";

export default combineReducers({
    contact,
    locale
});