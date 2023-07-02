import React from "react";
import ReactDOM from "react-dom/client";
import { TodoPage } from "./pages/todo";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={{store}}>
    <TodoPage />
    </Provider>
  </React.StrictMode>
);
