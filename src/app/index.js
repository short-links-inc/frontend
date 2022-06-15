import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "app/routes";
import NavBar from "app/screens/NavBar";
import { ShortLinksContextProvider } from "app/services/short-links/short-links.context";

function App() {
  return (
    <ShortLinksContextProvider>
      <Router>
        <NavBar />
        <Routes />
      </Router>
      <ToastContainer />
    </ShortLinksContextProvider>
  );
}

export default App;
