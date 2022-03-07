import Input from "../ui/Input";

import { Countries } from "../api/Countries";
import { useEffect, useState } from "react";

export const Country = (props) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const data = Countries;

  useEffect(() => {
    data((data) => {
        
        console.log(data);
        setSelectOptions(data)
    });
  }, [data]);

  return (
    <Input
      data={selectOptions}
      placeholder="choose location"
      type="select"
      label="Location"
      nameId="location"
    />
  );
};
