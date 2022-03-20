import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Mall from "./pages/Mall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Filter from "./pages/Filter";
import Order from "./pages/Order";
import NaviArrow from "./components/layout/NaviArrow";
import socketIOClient, { io } from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";
const App = () => {
  const [response, setReponse] = useState("");
  const socket = socketIOClient(ENDPOINT, {
    reconnectionDelayMax: 10000,
  });

  useEffect(() => {
    socket.on("FromAPI", (data) => {
      setReponse(data);
      console.log(response, 'asas');
    });
    io({ transports: ['websocket'] });

    return () => {
      socket.disconnect();
    }
  }, [response, socket]);
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
