import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/adminPanel/Login";
import Header from "./components/common/Header";
import './components/styles/App.css'

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Login />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
