import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./Action-Creatorse/Reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
