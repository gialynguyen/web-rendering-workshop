import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const initData = window.__INIT_DATA__;

const root = document.getElementById("root");
hydrateRoot(
  root,
  <App products={initData.products} comments={initData.comments} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
