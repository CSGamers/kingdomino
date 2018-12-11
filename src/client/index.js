import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/containers/App.js";
require("./index.css");
import store from "./store";

render(
  // wrap the App in the Provider and pass in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
