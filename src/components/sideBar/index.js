import React from "react";
import useStyles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BackupIcon from "@material-ui/icons/Backup";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import VerticalSplitOutlinedIcon from "@material-ui/icons/VerticalSplitOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import WifiIcon from "@material-ui/icons/Wifi";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SImpleFooter from "../Footer/simpleFooter";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import UploadContent from "../upload-content";
import SpacesTabs from "../spacesTabs";
import SharedSpaces from "../sharedSpaces";

// import Header from "../Header";
// import { Switch } from "@material-ui/core";

/**
 * @author
 * @function SideBar
 **/

const SideBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:950px)");

  const drawer = (
    <>
      {/* <Header /> */}
      <div className="main-example">
        <div className={classes.sideNavContainer}>
          {/* for section one */}

          <div className={classes.linksStyles}>
            <BackupIcon className={classes.iconStyling} />
            <Typography variant="span">
              <Link to="/dashboard" className={classes.linkName}>
                Upload
              </Link>
            </Typography>
          </div>

          <div className={classes.linksStyles}>
            <AddBoxOutlinedIcon className={classes.iconStyling} />
            <Typography variant="span" className={classes.linkName}>
              New
            </Typography>
          </div>

          <div className={classes.linksStyles}>
            <ExitToAppIcon className={classes.iconStyling} />
            <Typography variant="span" className={classes.linkName}>
              Register
            </Typography>
          </div>

          {/* for section two */}
          <div className={classes.spaceLinkStyle}>
            <span>
              <VerticalSplitOutlinedIcon className={classes.spaceIcon} />
              <Typography variant="span">
                <Link to="/dashboard/spaces" className={classes.linkName}>
                  Spaces
                </Link>
              </Typography>
            </span>
            <span>
              <AddCircleOutlineIcon className={classes.spaceIcon} />
            </span>
          </div>
          {/* expanded */}
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Animal Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              <EditOutlinedIcon className={classes.editIconStyle} />

              <ScreenShareIcon className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Freedom Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              <EditOutlinedIcon className={classes.editIconStyle} />

              <ScreenShareIcon className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Super Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              <EditOutlinedIcon className={classes.editIconStyle} />

              <ScreenShareIcon className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Music Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              <EditOutlinedIcon className={classes.editIconStyle} />

              <ScreenShareIcon className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Video Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              <EditOutlinedIcon className={classes.editIconStyle} />

              <ScreenShareIcon className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Demo Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              <EditOutlinedIcon className={classes.editIconStyle} />

              <ScreenShareIcon className={classes.shareIconStyle} />
            </span>
          </div>

          <div className={classes.spaceLinkStyle}>
            <span>
              <WifiIcon className={classes.iconStyling} />
              <Typography variant="span">
                <Link to="/dashboard/sharedSpaces" className={classes.linkName}>
                  {" "}
                  Shared Spaces
                </Link>
              </Typography>
            </span>
            <span>
              <AddCircleOutlineIcon className={classes.spaceIcon} />
            </span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden> */}
        {matches ? (
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        ) : null}
      </nav>
      <main className={matches ? classes.content : null}>
        <Route
          exact
          path="/dashboard"
          render={() => {
            return (
              <React.Fragment>
                <div style={{ paddingTop: 40 }}>
                  <UploadContent />
                </div>
              </React.Fragment>
            );
          }}
        />

        <Route
          path="/dashboard/spaces"
          render={() => {
            return (
              <React.Fragment>
                <div style={{ paddingTop: 70 }}>
                  <SpacesTabs />
                </div>
              </React.Fragment>
            );
          }}
        />

        <Route
          path="/dashboard/sharedSpaces"
          render={() => {
            return (
              <React.Fragment>
                <div style={{ paddingTop: 70 }}>
                  <SharedSpaces />
                </div>
              </React.Fragment>
            );
          }}
        />
      </main>
    </div>
  );
};

export default SideBar;
