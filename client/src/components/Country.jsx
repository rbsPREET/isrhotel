import { Countries } from "../api/Countries";
import React, { Fragment, useEffect, useState } from "react";
import useHttp from "../api/http";
import Select from "../ui/Select";

const Country = (props) => {
  const { sendRequest, data } = useHttp(Countries, true);
  const [country, setCountry] = useState("");

  const changeHandler = (value) => {
    setCountry(value);
    props.getDetails(value, props.nameId);
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Fragment>
      <Select
        placeholder="Choose the location you wanna stay!"
        icon={props.icon}
        options={data}
        onChange={changeHandler}
        onBlur={props.onBlur}
        value={country}
        label={props.label}
        className={props.className}
        mainDiv={props.mainDiv}
      />
    </Fragment>
  );
};
export default Country;
