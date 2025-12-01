import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Route path="" element={}/> */}
      {/* <Route path="" element={}/> */}
      {/* <Route path="" element={}/> */}
    </BrowserRouter>
  );
}

export default App;
