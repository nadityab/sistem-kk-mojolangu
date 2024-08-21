import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Read from "./Pages/Read";
import Delete from "./Pages/Delete";
import Update from "./Pages/Update";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
