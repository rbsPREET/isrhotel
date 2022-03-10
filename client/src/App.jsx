import React from "react";
import Home from "./pages/Home";
import Mall from "./pages/Mall";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:location/:dates/:guests" element={<Home />} /> {/*filter search*/ }
        <Route path="/malls" element={<Mall />} />{/*all malls*/ }
        <Route path="/mall/:id" element={<Mall />} />{/*single mall*/ }
        <Route path="/mall/:id/room/:roomId" element={<Mall />} />{/*room in single mall*/ }
      </Routes>
    </Router>
  );
};

export default App;
