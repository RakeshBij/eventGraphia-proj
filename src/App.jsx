// App.js
import React, { useState } from "react";
import PhotoGrid from "./components/Photogrid";
import FullSizeImage from "./components/FullSizeImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotoGrid />} />
        <Route path="/details/:id" element={<FullSizeImage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
