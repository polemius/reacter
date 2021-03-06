import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Background } from "components";

const Dashboard = () => {
  return (
    <Background variation={"light"}>
      <Grid container direction="column" alignContent="center">
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            display="block"
            align="center"
            gutterBottom
          >
            Work in Progress
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" display="block" align="center">
            Happy Hacking!!!
          </Typography>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Dashboard;
