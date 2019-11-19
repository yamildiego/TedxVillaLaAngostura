import { combineReducers } from "redux";
import locale from "./locale";
import contact from "./contact";
import info from "./info";
import general from "./general";

export default combineReducers({
    contact,
    locale,
    info,
    general
});