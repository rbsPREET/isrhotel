import Input from "../ui/Input";

import { Countries } from "../api/Countries";
import { Fragment, useEffect, useState } from "react";

export const Country = (props) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const data = Countries;

  useEffect(() => {
    data((data) => setSelectOptions(data));
  }, [data]);

  return (
    <Fragment>
      {props.icon}
      <Input
        mainDiv={props.mainDiv}
        className={props.className}
        data={selectOptions}
        placeholder="choose location"
        type="select"
        label="Location"
        nameId="location"
      />
    </Fragment>
  );
};
