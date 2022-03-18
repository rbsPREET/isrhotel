import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Body from "../components/malls/Body";
import Header from "../components/malls/Header";
import { GetMall } from "../store/mall";

const Mall = () => {
  const state = useSelector((state) => state.mall);
  const dispatch = useDispatch();
  const location = useLocation(); // get the mall Id from the path
  const mallId = location.pathname.split("/")[2];
    console.log(mallId);
  useEffect(() => {
    dispatch(GetMall(mallId));
  }, [dispatch, mallId]);
  return (
    <>
      <Header data={state.information}/>
      <Body data={state.information} mallId={mallId}/>
    </>
  );
};

export default Mall;
