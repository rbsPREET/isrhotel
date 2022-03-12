import React from "react";
//import { mallsData } from "../../mockData";
import Carousel from "../../ui/Carousel";
import { getMall } from "../../store/mall";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation() // get the mall Id from the path
  const mallId = location.pathname.split("/")[2]
  console.log(mallId)
  const { data } = getMall(mallId) // <= not working | need to return data of a mall to display
  console.log("data from getMall func: " + data)
  return (
    <>
      <Carousel data={data} borderRadius={true} template="mall-page" />
    </>
  )
};

export default Header;
