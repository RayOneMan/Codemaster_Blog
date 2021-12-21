import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.scss";
import "./i18n";

import Spinner from "./components/Spiner/Spinner";

ReactDOM.render(
  <Suspense fallback={<Spinner/>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
