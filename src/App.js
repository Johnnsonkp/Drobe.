import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/home/home";
import React from "react";

function App() {
  const CategoriesPage = (props) => {
    return (
      <div>
        <Link to="/">Home</Link>;<h1>Categories{window.location.pathname}</h1>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/c/" element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
