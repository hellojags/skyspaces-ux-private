import React from "react";
import useStyles from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import PermIdentity from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

/**
 * @author
 * @function AuthComponent
 **/

const AuthComponent = (props) => {
  // State
  const [value, setValue] = React.useState(1);
  const [activeDark, setActiveDark] = React.useState(false);

  // Style
  const classes = useStyles();
  const history = useHistory();

  // functions
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    let getMode = localStorage.getItem("darkMode");
    if (getMode === "true") {
      setActiveDark(true);
    } else {
      setActiveDark(false);
    }
  }, [localStorage.getItem("darkMode")]);

  return (
    <Grid
      container
      spacing={3}
      className={`most_main_grid_auth ${classes.most_main_grid_auth}`}
    >
      <Grid
        item
        lg={4}
        md={5}
        sm={7}
        xs={12}
        className={classes.main_grid_auth}
      >
        <Paper className={`${classes.paper} ${classes.MaintabsPaper}`}>
          <Paper className={classes.tabsPaper}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab
                label="Sign up"
                className={classes.butn_tab1}
                active={true}
                style={{
                  // background: `${value == 0 ? "white" : "#F3F3F3"}`,
                  background: `${
                    activeDark === false && value == 0
                      ? "white"
                      : activeDark === true && value == 0
                      ? "#1a1b1d"
                      : activeDark === false && value == 1
                      ? "#f3f3f3"
                      : activeDark === true && value == 1
                      ? "#000000"
                      : null
                  }`,
                  color: `${
                    activeDark === true && value == 0 ? "#1ed660" : "#1ed660"
                  }`,
                }}
              />
              <Tab
                label="Login"
                className={classes.butn_tab1}
                style={{
                  // background: `${value == 0 ? "white" : "#F3F3F3"}`,
                  background: `${
                    activeDark === false && value == 0
                      ? "#f3f3f3"
                      : activeDark === true && value == 0
                      ? "#000000"
                      : activeDark === false && value == 1
                      ? "white"
                      : activeDark === true && value == 1
                      ? "#1a1b1d"
                      : null
                  }`,
                  color: `${
                    activeDark === true && value == 1 ? "#1ed660" : "#1ed660"
                  }`,
                }}
              />
            </Tabs>
          </Paper>
          {/* container for input username or email */}
          <Grid container spacing={3} className="inpt-mail-pass-main-grid">
            {value === 0 ? (
              <Grid item lg={12} className={classes.mail_inpt_grid}>
                <div>
                  <TextField
                    className={`setAuthDarkBack ${classes.margin} ${classes.mail_textfield}`}
                    id="input-with-icon-textfield"
                    placeholder="Username or Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PermIdentity
                            style={{ content: "none", color: "lightGray" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* password */}

                  <TextField
                    className={`${classes.margin} ${classes.password_textfield}`}
                    id="input-with-icon-textfield"
                    placeholder="Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ content: "none", color: "lightGray" }}
                        >
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <Typography
                  variant="span"
                  className={classes.txt_span_frgt_pass}
                >
                  Forgot Your Password?
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={8} style={{ margin: "auto" }}>
                    <Button
                      variant="contained"
                      className={classes.butn_login}
                      onClick={() => history.push("/dashboard")}
                    >
                      Sign up
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item lg={12} className={classes.mail_inpt_grid}>
                <div>
                  <TextField
                    className={`${classes.margin} ${classes.mail_textfield}`}
                    id={
                      activeDark
                        ? "input-with-icon-textfield"
                        : "input-with-icon-textfieldLM"
                    }
                    placeholder="Username or Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PermIdentity style={{ color: "lightGray" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* password */}

                  <TextField
                    className={`${classes.margin} ${classes.password_textfield}`}
                    id={
                      activeDark
                        ? "input-with-icon-textfield"
                        : "input-with-icon-textfieldLM"
                    }
                    placeholder="Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ content: "none", color: "lightGray" }}
                        >
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <Typography
                  variant="span"
                  className={classes.txt_span_frgt_pass}
                >
                  Forgot Your Password?
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={8} style={{ margin: "auto" }}>
                    <Button
                      variant="contained"
                      className={classes.butn_login}
                      onClick={() => history.push("/dashboard")}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.description_auth}>
            Registring to SkySpaces,you accept our{" "}
            <span style={{ color: "#1DD65F", fontWeight: "600" }}>
              Terms of use
            </span>{" "}
            and <br />
            our{" "}
            <span style={{ color: "#1DD65F", fontWeight: "600" }}>
              Privacy policy
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthComponent;
