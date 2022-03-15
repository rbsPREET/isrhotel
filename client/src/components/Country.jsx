import { Countries } from "../api/Countries";
import React from "react";

import Select2 from "../ui/Select2";

const Country = () => {
  return (
    <Select2 positionIcon label="Location" nameId="location" http={Countries} />
  );
};
export default Country;
