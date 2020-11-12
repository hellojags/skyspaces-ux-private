import React from "react";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Table1 from "./table1";
import Table2 from "./table2";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import MenuItem from "@material-ui/core/MenuItem";

/**
 * @author
 * @function AuthComponent
 **/

const AuthComponent = (props) => {
  // State
  const [emp, setEmp] = React.useState("emp");
  // Style
  const classes = useStyles();

  // functions

  return (
    <Grid container spacing={3} className={classes.most_main_grid_settings}>
      <Grid item xs={12} className={classes.main_grid_settings}>
        <Paper className={`${classes.paper} ${classes.MaintabsPaper_settings}`}>
          <Paper className={classes.tabsPaper_settings}>
            <Grid container spacing={3} style={{ paddingBottom: "10px" }}>
              <Grid item xs={12}>
                <Typography className={classes.settings_title}>
                  Settings
                </Typography>

                {/* title select Skynet portal */}
                <Typography className={classes.lable_skylink_inpt_settings}>
                  Select a default Skynet ortal
                </Typography>
                <div
                  style={{
                    paddingBottom: "30px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  className="lable_skylink_inpt_settings_div"
                >
                  {/* input skyling url */}

                  <TextField
                    id="standard-basic"
                    select
                    value={emp}
                    className={`skynetPortal_inpt ${classes.skynetPortal_inpt}`}
                  >
                    <MenuItem
                      key="1"
                      value="emp"
                      className={classes.skynetPortal_MI}
                    >
                      http://slasky.net/
                    </MenuItem>
                  </TextField>

                  {/* save button */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={`save_btn_settings ${classes.button}`}
                    startIcon={<SaveIcon />}
                    style={{ color: "white", marginLeft: "15px" }}
                  >
                    Save
                  </Button>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "5px 5px 9px 5px #E6E6E6",
                    borderRadius: "10px",
                  }}
                >
                  <Table1 />
                </div>

                <div className={classes.backup_btn_div}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    className={classes.backup_btn}
                    startIcon={<SettingsBackupRestoreIcon />}
                  >
                    Create Backup
                  </Button>
                </div>
                <div>
                  <Table2 />
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
