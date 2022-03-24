import React, { forwardRef } from "react";

import Select2 from "../ui/Select2";
import { getCities } from "../store/city";
import { useSelector } from "react-redux";

const Country = forwardRef((props,ref) => {
  const state = useSelector(state=>state.cities)

  return (
    <Select2
    ref={ref}
    mainDiv={props.mainDiv}
    customWidth={props.customWidth}
      inBox={props.inBox}
      noBorders={props.noBorders}
      positionIcon={props.positionIcon}
      label={props.label}
      nameId="location"
      icon={props.icon}
      data={getCities()}
      dataValue={props.dataValue}
      dataValueName={props.dataValueName}
      state={state.names}
    />
  );
});
export default Country;
