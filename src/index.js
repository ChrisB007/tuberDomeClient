import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import App from "./App";

//Store Creation

const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
