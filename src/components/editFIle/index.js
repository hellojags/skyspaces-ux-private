import React from "react";
import useStyles from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";
import SelectSpaces from "./selectSpace";
import AutoCompl from "./autofield";
import ErrorAlertModal from "./error-alert";
import SuccessAlertModal from "./success-alert";
/**
 * @author
 * @function AuthComponent
 **/

const AuthComponent = (props) => {
  // State
  const [open, setOpen] = React.useState(false);
  const [Secondopen, setSecondOpen] = React.useState(false);

  // Style
  const classes = useStyles();

  // functions

  return (
    <>
      <ErrorAlertModal value={open} setOpen={setOpen} />
      <SuccessAlertModal value={Secondopen} setSecondOpen={setSecondOpen} />

      <Grid
        container
        spacing={3}
        className={`most_main_grid_ef ${classes.most_main_grid_ef}`}
      >
        <Grid item xs={12} className={classes.main_grid_ef}>
          <Paper className={`${classes.paper} ${classes.MaintabsPaper_ef}`}>
            <Paper className={classes.tabsPaper_ef}>
              {/* title */}

              <Typography className={classes.title1_ef}> Edit </Typography>

              {/* song Name */}

              <Typography className={classes.titleOng_ef}>
                Vevo cross the limit.mp3
              </Typography>

              {/*Skylink input label and input */}

              <Typography className={classes.lable_skylink_inpt_ef}>
                Skylink URL
              </Typography>

              {/* input skyling url */}

              <TextField
                id="standard-basic"
                style={{ width: "100%" }}
                placeholder="FAlseFsFas53ws67yThsgyH"
              />
              {/*File Name input label and input */}

              <Typography className={classes.lable_fileName_inpt_ef}>
                File Name
              </Typography>

              {/* input File name */}

              <TextField
                id="standard-basic"
                style={{ width: "100%" }}
                placeholder="vevo cross the limits"
                className={classes.skylinkUrl_txtfld}
              />

              {/* description */}
              <TextField
                className={classes.description_inpt_ef}
                placeholder="Description..."
                variant="outlined"
                id="mui-theme-provider-outlined-input"
              />

              {/*  Select Spaces */}
              <div style={{ paddingTop: "20px" }}>
                <SelectSpaces />
              </div>

              {/* Tags */}

              <Typography className={classes.lable_fileName_inpt_ef}>
                Tags
              </Typography>

              {/* input Tags field */}
              <AutoCompl />

              {/* Category */}
              <Typography className={classes.lable_fileName_inpt_ef}>
                Category
              </Typography>

              {/* input File name */}

              <TextField
                id="standard-basic"
                style={{ width: "100%" }}
                placeholder="Images"
                helperText="Please select category this is mandatory field"
              />

              {/* confirmation buttons */}
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  {/* delete button */}
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<DeleteIcon />}
                    style={{ marginRight: "20px", background: "#ff3d3d" }}
                  >
                    Delete
                  </Button>
                  {/* save button */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    style={{ marginRight: "20px", color: "white" }}
                    onClick={() => setSecondOpen(true)}
                  >
                    Save
                  </Button>
                  {/* done button */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<CheckCircleIcon />}
                    style={{ marginRight: "20px", color: "white" }}
                    onClick={() => setOpen(true)}
                  >
                    Done
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthComponent;
