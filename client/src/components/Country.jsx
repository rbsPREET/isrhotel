import { Countries } from "../api/Countries";
import React from "react";

import Select2 from "../ui/Select2";

const Country = (props) => {
  return (
    <Select2
    customWidth={props.customWidth}
      inBox={props.inBox}
      noBorders={props.noBorders}
      positionIcon={props.positionIcon}
      label={props.label}
      nameId="location"
      icon={props.icon}
      http={Countries}
    />
  );
};
export default Country;
