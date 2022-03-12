import React, { useEffect } from "react";
import Carousel from "../../ui/Carousel";
import { GetMall } from "../../store/mall";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const location = useLocation(); // get the mall Id from the path
  const state = useSelector((state) => state.mall);
  const dispatch = useDispatch();
  const mallId = location.pathname.split("/")[2];
  console.log(state);
  useEffect(() => {
    dispatch(GetMall(mallId));
    return () => {};
  }, [dispatch,mallId]);

  return state.img && <Carousel data={state.img} template="mall-page" />;
};

export default Header;
