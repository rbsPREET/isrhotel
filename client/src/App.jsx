import React from "react";
import Home from "./pages/Home";
import Mall from "./pages/Mall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Filter from "./pages/Filter";
import Order from "./pages/Order";
import NaviArrow from "./components/layout/NaviArrow";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/*single mall*/}
        <Route path="/mall/:name" element={<Mall />} />
        <Route path="/:location/:dates/:guests" element={<Filter />} />
        {/*filter search*/}
        <Route path="/malls" element={<Mall />} />
        {/*single mall with queries*/}
        <Route path="/mall/:id/room/:roomId" element={<Mall />} />
        {/*room in single mall*/}
        <Route path="/:location/:dates/:guests" element={<Home />} />
        {/*filter search*/}

        {/*order summary*/}
        <Route path="/order/:userId" element={<Order />} />
      </Routes>
      <Footer />
      <NaviArrow />
    </BrowserRouter>
  );
};

export default App;
