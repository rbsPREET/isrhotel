import React from "react";
import { useLocation } from "react-router-dom";
import Header2 from "components/Header/Header";
import Header from "shared/Header/Header";

const SiteHeader = () => {
  let location = useLocation();

  return location.pathname.includes("home-1-header-2") ? (
    <Header2 />
  ) : (
    <Header />
  );
};

export default SiteHeader;
