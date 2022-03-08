import React, { useEffect, useState } from "react";
import useHttp from "../api/http";

const Country = (props) => {
  const { sendRequest, data } = useHttp(Countries, true);
  const [country, setCountry] = useState("");

  const changeHandler = (value) => {
    setCountry(value);
    props.getDetails(value, props.nameId);
  };

  useEffect(() => {
	@@ -19,17 +19,17 @@ const Country = (props) => {

  return (
    <Input
      mainDiv={props.mainDiv}
      className={props.className}
      icon={props.icon}
      value={country}
      onChange={changeHandler}
      onBlur={props.onBlur}
      data={data}
      placeholder={props.placeholder}
      type={props.type}
      label={props.label}
      nameId={props.nameId}
    />
  );
};
