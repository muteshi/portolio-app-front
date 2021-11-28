import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/scss/main.scss";

import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <Router>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </Router>,
  document.getElementById("root")
);
