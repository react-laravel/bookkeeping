import { Grid } from "@material-ui/core";
import React from "react";

import Form from "./Form";
import RecentBills from "./RecentBills";
import Statistics from "./Statistics";

const Example = () => {
  return (
    <>
      <Grid container spacing={1} style={{ padding: 12 }}>
        <Grid item xs={12} md={4}>
          <Form />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentBills />
        </Grid>
        <Grid item xs={12} md={4}>
          <Statistics />
        </Grid>
      </Grid>
    </>
  );
};

export default Example;
