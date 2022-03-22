import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Body from "../components/malls/Body";
import Header from "../components/malls/Header";
import { GetMall } from "../store/mall";

const Mall = () => {
  const state = useSelector((state) => state.mall);
  const dispatch = useDispatch();
  console.log(state.searchToDispatch._id);
  useEffect(() => {
    dispatch(GetMall(state.searchToDispatch._id));
  }, [dispatch,state.searchToDispatch._id]);
  return (
    <>
      <Header data={state.information} />
      <Body data={state.information} mallId={state.searchToDispatch._id} />
    </>
  );
};

export default Mall;
