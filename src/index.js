import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
