import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootStore from "./store";
import thunk from "redux-thunk";
const store = createStore(rootStore, applyMiddleware(thunk));

if (module.hot) module.hot.accept();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
