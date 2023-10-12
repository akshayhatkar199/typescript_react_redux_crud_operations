import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create/index";
import Home from "./components/Home/index";
import Uploadfrom from "./components/Uploadfrom/index";
// Import Reduxinformationdata or other components as needed

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/edit/:id" element={<Uploadfrom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;