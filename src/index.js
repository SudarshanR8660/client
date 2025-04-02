import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./pages/auth/context/auth";

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
    <App />
    </AuthProvider>
    </Provider>,
  document.getElementById("root")
);
