import React from "react";
import { mallsData } from "../../mockData";
import Carousel from "../../ui/Carousel";

const Header = () => {
  return <Carousel data={mallsData} borderRadius={true} />;
};

export default Header;
