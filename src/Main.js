import { Grid } from "@material-ui/core";
import React from "react";

import Form from "./Form";
import Statistics from "./Statistics";

const Example = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Statistics />
      </Grid>
      <Grid item xs={12} md={6}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Example;
