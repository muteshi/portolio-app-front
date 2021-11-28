import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";

import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./router/Routes";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
