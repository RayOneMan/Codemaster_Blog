import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.scss";
import "./i18n";


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading ...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
