import Input from "../ui/Input";

import { Countries } from "../api/Countries";
import { Fragment, useEffect } from "react";
import useHttp from "../api/http";

export const Country = (props) => {
  const { sendRequest, data } = useHttp(Countries, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
      <Input
        mainDiv={props.mainDiv}
        className={props.className}
        icon={props.icon}
        data={data}
        placeholder="Choose the location you wanna stay!"
        type="select"
        label="Location"
        nameId="location"
      />
  );
};
