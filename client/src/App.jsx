import React from "react";
import Home from "./pages/Home";
import Mall from "./pages/Mall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:location/:dates/:guests" element={<Home />} />
        {/*filter search*/}
        <Route path="/malls" element={<Mall />} />
        {/*all malls*/}
        <Route path="/mall/:id" element={<Mall />} />
        {/*single mall*/}
        <Route path="/mall/:id/room/:roomId" element={<Mall />} />
        {/*room in single mall*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
