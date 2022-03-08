import Input from "../ui/Input";

import { Countries } from "../api/Countries";
import React, { useEffect, useState } from "react";
import useHttp from "../api/http";

const Country = ({ getDetails, icon, onBlur, type, label, nameId, placeholder, mainDiv, className }) => {
  const { sendRequest, data } = useHttp(Countries, true);
  const [country, setCountry] = useState("");

  const changeHandler = (value) => {
    setCountry(value);
    getDetails(value, nameId);
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Input
      mainDiv={mainDiv}
      className={className}
      icon={icon}
      value={country}
      onChange={changeHandler}
      onBlur={onBlur}
      data={data}
      placeholder={placeholder}
      type={type}
      label={label}
      nameId={nameId}
    />
  );
};
export default Country;
