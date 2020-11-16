import React from "react";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "./table";

/**
 * @author
 * @function AuthComponent
 **/

const AuthComponent = (props) => {
  // State
  const [thumbnail, setThumb] = React.useState("");
  // Style
  const classes = useStyles();

  // functions

  return (
    <Grid container spacing={3} className={classes.most_main_grid_actvHstry}>
      <Grid item xs={12} className={classes.main_grid_actvHstry}>
        <Paper
          className={`${classes.paper} ${classes.MaintabsPaper_actvHstry}`}
        >
          <Paper className={classes.tabsPaper_actvHstry}>
            <Grid container spacing={3} style={{ paddingBottom: "10px" }}>
              <Grid item xs={12}>
                <div
                  style={{
                    paddingTop: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography className={classes.actvHstry_title}>
                    Activity History
                  </Typography>
                  {/* search */}
                  <div className={classes.search_main_div}>
                    <span>
                      <i
                        className="fas fa-search srch-icon-inside-field-input"
                        style={{ position: "relative", top: "8px" }}
                      ></i>
                    </span>

                    <input
                      className={`form-control mr-sm-2 ${classes.srch_inpt}`}
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0 0 10px rgba(0,0,0,.4)",
                    borderRadius: "10px",
                  }}
                >
                  <Table />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AuthComponent;
