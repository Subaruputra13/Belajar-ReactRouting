import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Premium from "./pages/premium";
import DevSchool from "./pages/devschool";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Codepolitan
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/premium">
                  Premium
                </Link>
                <Link className="nav-link" to="/devschool">
                  DevSchool
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/devschool" element={<DevSchool />} />
      </Routes>
    </Router>
  );
};

export default App;
