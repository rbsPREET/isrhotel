import React, { useEffect, useLayoutEffect, useState } from "react";
import Home from "./pages/Home";
import Mall from "./pages/Mall";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Filter from "./pages/Filter";
import Order from "./pages/Order";
import NaviArrow from "./components/layout/NaviArrow";
import socketIOClient from "socket.io-client";
import Malls from "./pages/Malls";

const ENDPOINT = "http://localhost:5000";
const App = () => {
  // const [response, setReponse] = useState({});
  // const socket = socketIOClient(ENDPOINT);
  // useEffect(() => {

  //   socket.on('connect',()=>{
  //     console.log(socket.id)
  //   })

  //   socket.on("FromAPI", (data) => {
  //     setReponse(data);
  //     console.log(response,'asas');
  //   });

  //   socket.on('disconnect',()=>{
  //     console.log('disconnected')
  //   })

  //   return()=>{
  //     socket.disconnect();
  //   }
  // }, [response,socket]);

  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/*single mall*/}
        <Route path="/mall/:name" element={<Mall />} />
        <Route path="/:location/:dates/:guests" element={<Filter />} />
        {/*filter search*/}
        <Route path="/malls/:location" element={<Malls />} />
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
    </>
  );
};

export default App;
