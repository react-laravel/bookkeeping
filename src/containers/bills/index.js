import React from "react";

import BillsList from "../../components/Bills";
import axios from "../../instances/axios";

export default function Bills() {
  const [bills, setBills] = React.useState([]);

  React.useEffect(() => {
    axios.get("/bills").then(({ data }) => {
      setBills(data);
    });
  }, []);

  return <BillsList bills={bills} />;
}
