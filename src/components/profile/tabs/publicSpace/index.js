import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Cards from "./cards";

/**
 * @author
 * @function PublicSpaces
 **/

const PublicSpaces = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} style={{ width: "100%", margin: 0 }}>
      <Cards />
    </Grid>
  );
};

export default PublicSpaces;
