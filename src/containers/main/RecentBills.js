import React from "react";

import BillsList from "../../components/Bills";
import axios from "../../instances/axios";

export default function RecentBills() {
  const [bills, setBills] = React.useState([]);

  React.useEffect(() => {
    axios.get("/bills?size=5").then(({ data }) => {
      setBills(data);
    });
  }, []);

  return (
    <div>
      <h2>近期账单</h2>
      <BillsList bills={bills} />
    </div>
  );
}
