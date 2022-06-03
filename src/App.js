import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, Login } from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<About />} path="/about" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
};

export default App;
