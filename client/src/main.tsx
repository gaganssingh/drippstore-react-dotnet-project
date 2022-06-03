import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./app/layout/App";

import "./app/layout/styles.css";

export const history = createBrowserHistory();

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Router history={history}>
//       <App />
//     </Router>
//   </React.StrictMode>
// );

// Using react v.17 style entry point as
// react v.18 is not compatible with react-router-dom's
// <Router history={history}/> directive
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")!
);
