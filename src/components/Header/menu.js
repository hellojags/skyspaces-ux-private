import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Box from "@material-ui/core/Box";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import SettingsIcon from "@material-ui/icons/Settings";
import BackupIcon from "@material-ui/icons/Backup";
import HistoryIcon from "@material-ui/icons/History";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Switch from "@material-ui/core/Switch";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuTop: {
    marginTop: 25,
  },
  profilePicStyling: {
    // boxShadow: "0px 0px 5px 8px rgba(50, 50, 50, 0.14)",
    boxShadow: "0 0 10px rgba(0,0,0,.4)",
    backgroundColor: theme.palette.whiteBgColor,
    borderRadius: "50%",
    width: 90,
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    cursor: "pointer",
    fontSize: 45,
    marginTop: 30,
    marginLeft: 65,
    marginRight: 65,
  },
  camereIconContainer: {
    width: 25,
    height: 25,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "relative",
    left: 123,
    top: -20,
  },
  userIdStyle: {
    fontSize: 14,
    color: theme.palette.linksColor,
    fontWeight: 500,
  },
  userNameStyle: {
    fontSize: 18,
    color: theme.palette.linksColor,
    fontWeight: 500,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    paddingBottom: 20,
  },
  menuListContainers: {
    display: "flex",
    fontSize: 16,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    color: theme.palette.linksColor,
  },
  menuBackGroundColor:{
    backgroundColor:theme.palette.headerBgColor
  }
}));

function UserMenu(props) {
  const { userMenu, setUserMenu } = props;
  const [switchMode, setSwitchMode] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  const userMenuClose = () => {
    setUserMenu(null);
  };

  const handlingDarkMode = (eve) => {
    // console.log(eve.target.checked);
    setSwitchMode(eve.target.checked);
    localStorage.setItem("darkMode", eve.target.checked);
    props.handleDarkMode(eve.target.checked);
    // setTimeout(() => {
    // }, 1000);
  };

  React.useEffect(()=>{
    let getMode=localStorage.getItem("darkMode");
    if(getMode==="true"){
      setSwitchMode(true);
    } else {
      setSwitchMode(false);
    }
  },[localStorage.getItem("darkMode")])

  return (
    <>
      <Popover
        className={classes.menuTop}
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          paper: "py-8",
        }}
      >
        <Box p={2} className={classes.menuBackGroundColor}>
          <div
            className={classes.profilePicStyling}
            onClick={() => history.push("/profile")}
          >
            A
          </div>
          <div className={classes.camereIconContainer}>
            <CameraAltIcon style={{ fontSize: 13, color: "white" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <Typography className={classes.userIdStyle}>User ID</Typography>
            <div>
              <Typography className={classes.userNameStyle}>
                Alexandra
              </Typography>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Link to="/dashboard/setting">
              <div
                className={classes.menuListContainers}
                onClick={userMenuClose}
              >
                {" "}
                <SettingsIcon style={{ fontSize: 18 }} />
                <div style={{ paddingLeft: 20 }}>
                  <Typography variant="span">Setting</Typography>
                </div>
              </div>
            </Link>
            <div className={classes.menuListContainers} onClick={userMenuClose}>
              <BackupIcon style={{ fontSize: 18 }} />
              <div style={{ paddingLeft: 20 }}>
                <Typography variant="span">Backup</Typography>
              </div>
            </div>
            <Link to="/dashboard/history">
              <div
                className={classes.menuListContainers}
                onClick={userMenuClose}
              >
                <HistoryIcon style={{ fontSize: 18 }} />
                <div style={{ paddingLeft: 20 }}>
                  <Typography variant="span">History</Typography>
                </div>
              </div>
            </Link>
            <div
              className={classes.menuListContainers}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Brightness4Icon style={{ fontSize: 18 }} />
                <div style={{ paddingLeft: 20 }}>
                  <Typography variant="span">Dark mode</Typography>
                </div>
              </div>
              <div style={{ marginLeft: 40 }}>
                <Switch
                  checked={switchMode}
                  onChange={handlingDarkMode}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
            </div>
            <div className={classes.menuListContainers}>
              <ExitToAppIcon style={{ fontSize: 18 }} />
              <div style={{ paddingLeft: 20 }}>
                <Typography variant="span">Sign out</Typography>
              </div>
            </div>
          </div>
        </Box>
      </Popover>
    </>
  );
}

export default UserMenu;
