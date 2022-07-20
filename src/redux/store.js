import { applyMiddleware, legacy_createStore } from "redux";
import { reducer as AppReducer } from "./reducer";
import thunk from "redux-thunk";

//const rootReducer = combineReducers({ AppReducer, AuthReducer });
const store = legacy_createStore(AppReducer, applyMiddleware(thunk));
export { store };
