import { Grid } from "@material-ui/core";
import React from "react";

import Form from "./Form";
import RecentAvg from "./RecentAvg";
import RecentBills from "./RecentBills";

const App = () => {
  return (
    <>
      <Grid container spacing={1} style={{ padding: 12 }}>
        <Grid item xs={12} md={4}>
          <Form />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentAvg />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentBills />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
