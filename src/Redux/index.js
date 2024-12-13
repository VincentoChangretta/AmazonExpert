import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
composeWithDevTools

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))